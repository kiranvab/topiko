import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { NavigationExtras } from '@angular/router';
import { AudiowebrtcService } from '../providers/audiowebrtc.service';
import { Observable } from "rxjs/rx";
import { Subscription } from 'rxjs/Subscription';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';
import { AudioToggle } from 'capacitor-audio-toggle'
@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  ObservableVar: any;
  business_id: any;
  employees: any;
  prtner_id: any;
  chresponse: Object;
  chatroom: any;
  udata: any;
  ucity: any;
  user_id: any;
  contacts: any;
  business: Object;
  business_name: any;
  userdata: any;
  patner_mobile: any;
  branches:any;
  branch:any;
  branchusers: Object;
  count: any;
  partnerId: any;
  ring: MediaObject;
  ringtone: MediaObject;
  busytone: MediaObject;
  callId: string;
  Endcall: any;
  ResponseData: any;
  callstatus: any;
  incomming: any;
  ans_status: any;
  Cstat: any;
  Status: any;
  Ans_Status: any;
  incmng: any=false;
  outgng:any = true;
  MianDiv:any=true;
  AudioDiv:any=false;
  calheader:any=true;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  user_mobile: any;
  constructor(
    private storage:Storage,
    private http:HttpClient,
    private route:Router,
    private router: ActivatedRoute,
    public toastController: ToastController,
    public navCtrl: NavController,
    public webRTC: AudiowebrtcService,
    public elRef: ElementRef,
    private media : Media,
  ) { 
    this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
  this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
  this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3')
    router.params.subscribe(val=>{})
    this.ObservableVar = Observable.interval(2000).subscribe(()=>{ 
      this.CheckCallStatus();
    });
  }

  ngOnInit() {
    this.router.params.subscribe(val=>{
      this.storage.get("bid").then(bval=>{
        this.business_id = bval;

        // this.http.get(AppComponent.ApiUrl+"getemployees.php?bid="+this.business_id).subscribe(response=>{
        //   this.employees = response;
        //   console.log("employees:", this.employees);
        // });
        this.http.get(AppComponent.ApiUrl+"getbusinessdetails.php?bid="+this.business_id).subscribe(bdtails=>{
          this.business = bdtails;
          console.log("business Dtails:", this.business);
          this.business_name = this.business[0].business_name;
          console.log("business Name:", this.business_name)
      })
      this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.business_id).subscribe(branch=>{
        this.branches = branch;
        console.log("business Branches:", this.branches)
    })
    });

    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        this.user_id = this.udata[0].id;
        this.user_mobile = this.udata[0].mobile;
        console.log(this.ucity);
      });

    });
  }

  Changeudio(){
    AudioToggle.setAudioMode({mode:'earpiece'});
   }

  chat(i){
    this.prtner_id = this.employees[i].user_id;
    console.log("partner_id", this.prtner_id)
     this.http.get(AppComponent.ApiUrl+"businesschatroom.php?user_id="+this.user_id+"&partner_id="+this.prtner_id+"&bid="+this.business_id).subscribe((chatdata)=>{
       this.chresponse = chatdata;
       console.log("chatroom Data", this.chresponse)
       this.chatroom = this.chresponse[0].chatroom;
       this.storage.set("chatroom", this.chatroom);
       this.storage.set("chatname", this.business_name);
       console.log("chatroom",this.chatroom);
     });
     this.route.navigate(['chatbox']);
   }

   video(i){
     this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
       this.userdata=udata;
       this.patner_mobile= this.userdata[0].mobile;
       console.log("partner_mobile:", this.patner_mobile);
       this.storage.set("partnerId", this.patner_mobile);
       this.route.navigate(['/videocall']);
     })
   }

  /*  audio(i){
    this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
      this.userdata=udata;
      this.patner_mobile= this.userdata[0].mobile;
      console.log("partner_mobile:", this.patner_mobile);
      this.storage.set("partnerId", this.patner_mobile);
      this.route.navigate(['/calling']);
    })
  } */

  branchemp(event){
    console.log("Branch ID", this.branch);
    this.http.get(AppComponent.ApiUrl+"getbranchemp.php?brid="+this.branch).subscribe(udata=>{
    
      this.count = udata
      if(this.count.length > 0){
        this.employees=udata
    }
    else{
      this.presentToast();
    }
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No Employees in this Branch',
      duration: 5000,
      color: 'secondary',
      position: "bottom"
    });
    toast.present();
  }
  audio(i){
    this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
      this.userdata=udata;
      this.partnerId= this.userdata[0].mobile;
      this.StartCall(this.partnerId);
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
    })
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
  
      });
     
    } 
EndCall() {
  this.callend();
}
ionViewDidLoad(){
  this.ObservableVar.unsubscribe();
}

}
