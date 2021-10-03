import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { AudiowebrtcService } from '../providers/audiowebrtc.service';
import { Observable } from "rxjs/rx";
import { Subscription } from 'rxjs/Subscription';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { AudioToggle } from 'capacitor-audio-toggle'
@Component({
  selector: 'app-calls-contact',
  templateUrl: './calls-contact.page.html',
  styleUrls: ['./calls-contact.page.scss'],
})
export class CallsContactPage implements OnInit {
  ObservableVar: Subscription;
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  user_id: any;
  userDetails: any;
  user_mobile: any;
  contacts: any;
  cntlength: any;
  ring: MediaObject;
  ringtone: MediaObject;
  busytone: MediaObject;
  MianDiv:any=true;
  AudioDiv:any=false;
  incomming: any;
  callId: any;
  calheader:any=true;
  incmng: any=false;
  outgng:any = true;
  calls: any;
  Endcall: any;
  ResponseData: any;
  callstatus: any;
  ans_status: any;
  Cstat: any;
  Status: any;
  Ans_Status: any;
  constructor(
    private http : HttpClient,
    private storage: Storage,
    private route:Router,
    private router:ActivatedRoute,
    public webRTC: AudiowebrtcService,
    public elRef: ElementRef,
    private media : Media,
    public navCtrl: NavController,
  ) { 
    this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
    this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
    this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3')

    this.ObservableVar = Observable.interval(2000).subscribe(()=>{ 
      this.CheckCallStatus();
    });
  }

  ngOnInit() {
    this.router.params.subscribe(val=>{
      this.storage.get('userdetails').then((udetails)=>{
        this.userDetails = udetails
        this.user_id = this.userDetails[0].id;
        console.log(this.user_id,'User ID');
        this.user_mobile = this.userDetails[0].mobile;
        this.http.get(AppComponent.ApiUrl+"getcontacts.php?user_id="+this.user_id).subscribe(Response =>
          {
            this.contacts = Response;
            this.cntlength = this.contacts.length;
            console.log("contacts",Response);
          });
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
    });
  });
  
}
Changeudio(){
  AudioToggle.setAudioMode({mode:'earpiece'});
 }
audiocall(i){
    this.partnerId=this.contacts[i].mobile;
  this.StartCall(this.partnerId)
  this.calheader=false;
  this.MianDiv=false;
  this.AudioDiv=true;
  
  this.myEl = this.elRef.nativeElement.querySelector('#my-video');
  this.myEl.muted=true;
  this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
  this.webRTC.init(this.user_mobile, this.myEl, this.partnerEl);
  let mycall = this;
  setTimeout(function(){ 
    mycall.call();},5000)
  }
  

  call(){
    console.log("call connected", this.partnerId);
    this.webRTC.call(this.partnerId);
  }
  callend(){
   
    this.calheader=true;
    this.AudioDiv=false;
    this.MianDiv=true;
    this.ring.setVolume(0);
    this.ringtone.setVolume(0);
    this.busytone.setVolume(0);
    this.webRTC.close();
    this.http.get(AppComponent.ApiUrl+"endcall.php?call_id="+this.callId+"&record="+this.partnerId+"CallRecord.mp3").subscribe((Endcall)=>{
      this.Endcall = Endcall;
      if(this.Endcall==1){
        this.route.navigate(['/calls']);
      }
    }) 
  }


  // Clling Server Functions


  //start Call
  StartCall(pid){
    this.http.get(AppComponent.ApiUrl+"startcall.php?user_mobile="+this.user_mobile+"&calee_mobile="+pid+"&call_type=audio").subscribe((ResponseData)=>{
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

  // Answer Call code

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
        mycall.call();},5000)
  
    }
  });

  } 

  //Answercall code ends here

  //check call status code starts here
  CheckCallStatus(){
    this.http.get(AppComponent.ApiUrl+"checkcallstatus.php?call_id="+this.callId).subscribe((Cstat)=>{
      this.Cstat=Cstat;
      console.log("Call Status is:", this.Cstat);
      if(this.Cstat !=0){
        this.Status = this.Cstat[0].status;
        this.Ans_Status = this.Cstat[0].ans_status;
        if(this.Ans_Status==1){
          this.ring.setVolume(0);
          this.Changeudio();
        }
        if(this.Status==2){
          this.ObservableVar.unsubscribe();
          this.callend();
        }
      }
    

    });
   
  } 
EndCall() {
this.callend();
}
ionViewDidLeave(){
this.ObservableVar.unsubscribe();
this.http.get(AppComponent.ApiUrl+"offlinestatus.php?user_id="+this.user_id).subscribe(Response =>
  {
    console.log(Response);
  });

}
}