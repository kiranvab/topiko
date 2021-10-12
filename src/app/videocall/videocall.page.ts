import { HttpClient } from '@angular/common/http';
import { Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '@ionic-native/media/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { WebrtcService } from '../providers/webrtc.service';
import { Observable } from "rxjs/rx";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.page.html',
  styleUrls: ['./videocall.page.scss'],
})
export class VideocallPage  {
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  userDetails: any;
  ring: any;
  ringtone: any;
  busytone: any;
  ResponseData: Object;
  callId: any;
  callstatus: Object;
  user_mobile: string;
  incomming: Object;
  calheader: boolean;
  MianDiv: boolean;
  AudioDiv: boolean;
  incmng: boolean;
  outgng: any=false;
  Endcall: Object;
  ObservableVar: Subscription;
  Cstat: Object;
  Status: any;
  Ans_Status: any;
  callrecord: any;
  callduration: any;
  mymeType: any;
  pvideo:any=false;
  ans_status: Object;
  constructor(
    public webRTC: WebrtcService,
    public elRef: ElementRef,
    private storage  :Storage,
    private http: HttpClient,
    private media : Media,
    public navCtrl: NavController,
    private route : Router
  ) { 
    this.ring = this.media.create('assets/ringtones/ring.mp3');
    this.ringtone = this.media.create('assets/ringtones/ringtone.mp3');
    this.busytone = this.media.create('assets/ringtones/busy.mp3')
  }

  ngOnInit() {
    this.storage.get('userdetails').then((udetails)=>{
      this.userDetails = udetails;
      this.userId = this.userDetails[0].mobile;
      this.init();
    });

    this.storage.get("partnerId").then(partner=>{
      this.partnerId = partner;
      this.StartVCall(this.partnerId);
      let vidcall = this;
      setTimeout(function(){
        vidcall.call();
      }, 3000);
    })

    this.ObservableVar = Observable.interval(2000).subscribe(()=>{ 
      this.CheckCallStatus();
      this.CheckIncomming();
    });
  }

  CheckCallStatus(){
    this.http.get(AppComponent.ApiUrl+"checkcallstatus.php?call_id="+this.callId).subscribe((Cstat)=>{
      this.Cstat=Cstat;
      console.log("Call Status is:", this.Cstat);
      if(this.Cstat !=0){
        this.Status = this.Cstat[0].status;
        this.Ans_Status = this.Cstat[0].ans_status;
        if(this.Ans_Status==1){
          this.ring.setVolume(0);
          this.pvideo=true;
        }
        if(this.Status==2){
          this.callend();
        }
      }
    

    });
   
  } 

  CheckIncomming(){
    this.http.get(AppComponent.ApiUrl+"checkincomming.php?user_mobile="+this.user_mobile).subscribe((incval)=>{
      this.incomming = incval;
      console.log("calls Pge Inoming Staus", this.incomming)
      if(this.incomming !=0){
        this.partnerId=this.incomming[0].caller_mobile;
        this.callId = this.incomming[0].id;
      console.log("Incoming call details are:",this.incomming);
      this.ringtone.setVolume(1);
      this.ringtone.play();
      this.calheader=false;
            this.MianDiv=false;
            this.AudioDiv=true;
            this.incmng=true;
            this.outgng = false;
      }
      
    });
  }

      //start Call
      StartVCall(pid){
        this.http.get(AppComponent.ApiUrl+"startcall.php?user_mobile="+this.userId+"&calee_mobile="+pid+"&call_type=video").subscribe((ResponseData)=>{
          this.ResponseData =ResponseData
          console.log("Call Response Data:", this.ResponseData)
          if(this.ResponseData!=0){
           this.callId = this.ResponseData;
           this.http.get(AppComponent.ApiUrl+"callstatus.php?calee_moble="+pid).subscribe((calval)=>{
             this.callstatus = calval;
             if(this.callstatus==0){
              this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
              console.log(this.ring);
              this.ring.setVolume(1);
              this.ring.play();
              let ringer = this
              setInterval(function(){
                ringer.ring.play();
              },2000);
              setTimeout(() => {
                clearInterval();
              }, 10000);
              setTimeout(()=>{
                ringer.callend();
              }, 45000);
              
             }
             else{
              this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3')
               this.busytone.setVolume(1);
               this.busytone.play();
               let callEnd =this;
               setTimeout(function(){
                callEnd.callend();
               },8000);
             }
           })
          }
        })
        }
  

      // Strat call code EndsHere

  async init() {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.myEl.muted=true;
    this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  async call() {
    this.webRTC.call(this.partnerId);
    this.swapVideo('my-video');
  }

  swapVideo(topVideo: string) {
    this.topVideoFrame = topVideo;
  }
  callend(){
    this.calheader=true;
    this.AudioDiv=false;
    this.MianDiv=true;
    this.ring.setVolume(0);
    this.ringtone.setVolume(0);
    this.busytone.setVolume(0);
    this.webRTC.close();
    this.http.get(AppComponent.ApiUrl+"endcall.php?call_id="+this.callId+"&record=none").subscribe((Endcall)=>{
      this.Endcall = Endcall;
      if(this.Endcall==1){
        this.ObservableVar.unsubscribe;
        this.route.navigate(['/home']);
      }
    }) 
  }

  AnsCall(){
    console.log("Call_id", this.incomming[0].id);
    this.ringtone.setVolume(0);
    this.incmng=false;
    this.outgng = true;
    this.http.get(AppComponent.ApiUrl+"answerstatus.php?call_id="+this.incomming[0].id).subscribe((ans_status)=>{
      this.ans_status = ans_status;
      if(this.ans_status==1){
        console.log("Call answered");
        this.partnerId = this.incomming[0].caller_mobile; 
        this.calheader=false;
        this.MianDiv=false;
        this.AudioDiv=true;
        this.myEl = this.elRef.nativeElement.querySelector('#my-video');
        this.myEl.muted=true;
        this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
        this.webRTC.init(this.user_mobile, this.myEl, this.partnerEl);
        let mycall = this;
        setTimeout(function(){ 
          mycall.call();
        },5000)
    
      }
    });

    } 

}
