import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef} from '@angular/core';
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
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse } from 'capacitor-voice-recorder';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  ObservableVar: Subscription;
  ObservableVar1: Subscription;
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  test: any;
  MyFire: string;
  segmentModel:string;
  contacts: any;
  userDetails: any;
  user_id: any;
  chresponse: any;
  chatroom: any;
  prtner_id: any;
  buchat: any;
  user_mobile: any;
  MianDiv:any=true;
  AudioDiv:any=false;
  calheader:any=true;
  incomming: any;
  callId: any;
  ResponseData: any;
  callstatus: any;
  ring: MediaObject;
  ringtone: MediaObject;
  busytone: MediaObject;
  ans_status: any;
  zero: any;
  incmng: any=false;
  outgng:any = true;
  Endcall: any;
  Cstat: any;
  Status: any;
  Ans_Status: any;
  name: any;
  broom: any;
  onine: any;
  lastseen: any;
  chats: any;
  calls: any;
  Audiofile: any;
  callrecord: any;
  callduration: any;
  mymeType: any;
  constructor(
    private storage: Storage,
    private http:HttpClient,
    private route:Router,
    private router:ActivatedRoute,
    public webRTC: AudiowebrtcService,
    public elRef: ElementRef,
    private media : Media,
    public navCtrl: NavController,
    private file: File,
    private transfer: FileTransfer,
  ) {
    this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
    this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
    this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3')
    this.segmentModel = "calls";
    this.ObservableVar = Observable.interval(2000).subscribe(()=>{ 
      this.CheckCallStatus();
      //this.CheckIncomming();
    });
   }
   Changeudio(){
    AudioToggle.setAudioMode({mode:'earpiece'});
   }
   SettoSpeaker(){
     AudioToggle.setAudioMode({mode:'speaker'})
   }
  ngOnInit() {
   this.router.params.subscribe(val=>{
    this.storage.get('userdetails').then((udetails)=>{
      this.userDetails = udetails;
      console.log("UserDetails:", this.userDetails)
      this.user_id = this.userDetails[0].id;
      console.log(this.user_id,'User ID');
      this.user_mobile = this.userDetails[0].mobile;
      this.http.get(AppComponent.ApiUrl+"onlinestatus.php?user_id="+this.user_id).subscribe(Response =>
        {
          console.log("online Staus",Response);
        });
      this.http.get(AppComponent.ApiUrl+"mycalls.php?mobile="+this.user_mobile).subscribe((response)=>{
        this.calls= response
        console.log("Calld:", this.calls);
      });
      this.ObservableVar1 = Observable.interval(2000).subscribe(()=>{
      this.http.get(AppComponent.ApiUrl+"mychats.php?user_id="+this.user_id).subscribe((response)=>{
        this.chats= response
        console.log("Chats:", this.chats);
      });
    });
      console.log(this.user_id,'User ID');
      this.http.get(AppComponent.ApiUrl+"getbhcats.php?user_id="+this.user_id).subscribe((response)=>{
        this.buchat= response
        console.log("Get Business Chats:", this.buchat);
      });
   

      // incoming Details
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
// incoming code End
  
   });

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

  chat(i){
      this.chatroom = this.chats[i].chatroom;
      this.name = this.chats[i].name;
      this.onine = this.chats[i].online_status;
      this.lastseen = this.chats[i].last_seen;
      this.http.get(AppComponent.ApiUrl+"chatmsg_statusupdate.php?chatroom="+this.chatroom).subscribe((cdata)=>{
        console.log(cdata);
      })
      console.log("chatroom",this.chatroom);
      let navigationExtras: NavigationExtras = {
        queryParams: {
            room : this.chatroom,
            name : this.name,
            onine : this.onine,
            last_seen: this.lastseen
        }
    };
    this.navCtrl.navigateForward(['/chatbox'],navigationExtras);
    
  }
 
  businesschat(i){
   this.broom=this.buchat[i].chatroom;
   let navigationExtras: NavigationExtras = {
    queryParams: {
        room : this.broom,
    }
};
this.navCtrl.navigateForward(['/chatbox'],navigationExtras);

   }
  videocall(i){
    if(this.calls[i].caller_mobile===this.user_mobile){
      this.partnerId=this.calls[i].calee_mobile;
    }
    else{
      this.partnerId=this.calls[i].caller_mobile;
    }
    this.storage.set("partnerId", this.partnerId);
      this.route.navigate(['videocall']);
    }
    
    audiocall(i){
      if(this.calls[i].caller_mobile===this.user_mobile){
        this.partnerId=this.calls[i].calee_mobile;
      }
      else{
        this.partnerId=this.calls[i].caller_mobile;
      }
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
        this.stopRec();
        this.calheader=true;
        this.AudioDiv=false;
        this.MianDiv=true;
        this.ring.setVolume(0);
        this.ringtone.setVolume(0);
        this.busytone.setVolume(0);
        this.webRTC.close();
        this.http.get(AppComponent.ApiUrl+"endcall.php?call_id="+this.callId+"&record="+this.callrecord).subscribe((Endcall)=>{
          this.Endcall = Endcall;
          if(this.Endcall==1){
            this.ObservableVar.unsubscribe;
            this.route.navigate(['/home']);
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
            mycall.call();
            mycall.startRec();
          },5000)
      
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
              this.stopRec();
              var rurl = AppComponent.ApiUrl+"recrodcall.php"
              var rData = JSON.stringify({
                  'call_id':this.callId,
                  'callrecord': this.callrecord,
                  'duration':this.callduration,
                  'ext':this.mymeType
              });
              this.http.post(rurl, rData).subscribe((adata)=>{
                if(adata==1){
                  alert("record Saved successfully");
                }
              })
              this.callend();
            }
          }
        
    
        });
       
      } 
  EndCall() {
    this.callend();
  }
  ionViewDidLeave(){
    this.http.get(AppComponent.ApiUrl+"offlinestatus.php?user_id="+this.user_id).subscribe(Response =>
      {
        console.log(Response);
      });
      this.ObservableVar.unsubscribe();
      this.ObservableVar1.unsubscribe();
  }
  GotoHome(){
    this.route.navigate(['/home']);
  }
  startRec(){
    //alert("recordong started")
    VoiceRecorder.canDeviceVoiceRecord().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
    VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value))
    VoiceRecorder.startRecording()
.then((result: GenericResponse) => this.Audiofile = result.value)
.catch(error => console.log(error))
  }
  stopRec(){
    //alert("recordong completed")
    VoiceRecorder.stopRecording()
.then((result: RecordingData) => {this.Audiofile=result.value;
this.callrecord= this.Audiofile.recordDataBase64
this.callduration = this.Audiofile.msDuration
this.mymeType = this.Audiofile.mimeType
})
.catch(error => console.log(error))
  }
}
