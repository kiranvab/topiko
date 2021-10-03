import { HttpClient } from '@angular/common/http';
import { Component, ElementRef} from '@angular/core';
import { Media } from '@ionic-native/media/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { WebrtcService } from '../providers/webrtc.service';
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
  constructor(
    public webRTC: WebrtcService,
    public elRef: ElementRef,
    private storage  :Storage,
    private http: HttpClient,
    private media : Media,
    public navCtrl: NavController,
  ) { 
    this.ring = this.media.create('https://topiko.com/ringtones/ring.mp3');
    this.ringtone = this.media.create('https://topiko.com/ringtones/ringtone.mp3');
    this.busytone = this.media.create('https://topiko.com/ringtones/busy.mp3')
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
  callend() {
    throw new Error('Method not implemented.');
  }
      // Strat call code EndsHere

  async init() {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
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
}
