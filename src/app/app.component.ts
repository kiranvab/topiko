import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from "rxjs/rx";
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public static ApiUrl = 'https://topiko.com/app/';
  //public static ApiUrl = 'http://localhost/topiko/app/';
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Business', url: '/my-business', icon: 'briefcase' },
    { title: 'Career', url: '/careerview', icon: 'glasses' },
    { title: 'Wallet', url: '/wallet', icon: 'wallet' },
    { title: 'My Visting Card', url: '/mycard', icon: 'card' },
    { title: 'Qr Reach', url: '/qrreach', icon: 'qr-code' },
    { title: 'Invitation', url: '/folder/Inbox', icon: 'mail-open' },
    { title: 'Referal', url: '/folder/Inbox', icon: 'share-social' },
    { title: 'Reach Us', url: '/folder/Inbox', icon: 'paper-plane' },
    { title: 'Logout', url: '/folder/Inbox', icon: 'lock-open' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  userDetails: any;
  user_mobile: any;
  incomming: any;
  ObservableVar: Subscription;
  udata: any;
  uname: any;
  umobile: any;
  ucity: any;
  ucountry: any;
  constructor(
    private storage : Storage,
   // private backgroundMode: BackgroundMode,
    private http: HttpClient,
    private route : Router
    ) {
     // this.backgroundMode.enable();
      this.storage.create();
      //this.CheckIncoming();
     
  }

  async ngOnInit() {
    await this.storage.create();
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.uname=this.udata[0].name;
        this.umobile = this.udata[0].mobile;
        this.ucity = this.udata[0].city;
        this.ucountry = this.udata[0].country;
        console.log(this.udata);
      });
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    
  }

  CheckIncoming(){
    this.storage.get("userdetails").then((uval)=>{
      this.userDetails = uval;
    this.user_mobile = this.userDetails[0].mobile;
    if(this.user_mobile){
      this.ObservableVar= Observable.interval(3000).subscribe(()=>{
      this.http.get(AppComponent.ApiUrl+"checkincomming.php?user_mobile="+this.user_mobile).subscribe((incoming)=>{
        this.incomming = incoming;
        console.log("incoming:",this.incomming);
        if(this.incomming!=0){
         this.route.navigate(['videocall']);
        }
        else{
          //this.route.navigate(['home']);
        }
      })
    });
  }

});
  }
}