import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from "rxjs/rx";
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventsService } from './services/events.service';
import { AlertController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public static ApiUrl = 'https://topiko.com/app/';
  //public static ApiUrl = 'http://localhost/topiko/app/';
  public appPages = [
    { title: 'Home', url: '/home', img: 'assets/menu/home.svg' },
    { title: 'Business', url: '/my-business', img: 'assets/menu/business.svg' },
    { title: 'Career', url: '/careerview', img: 'assets/menu/careers.svg' },
    { title: 'Wallet', url: '/wallet', img: 'assets/menu/wallet.svg' },
    { title: 'My Visting Card', url: '/mycard', img: 'assets/menu/visitingcard.svg' },
    { title: 'Qr Reach', url: '/qrreach', img: 'assets/menu/qr-code.svg' },
    // { title: 'Invitation', url: '/folder/Inbox', icon: 'mail-open' },
    //{ title: 'Referal', url: '/folder/Inbox', img: 'assets/menu/invitation.svg' },
    { title: 'Reach Us', url: '/contact', img: 'assets/menu/reach.svg' },
    { title: 'Logout', url: '/relogin', img: 'assets/menu/logout.svg' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  userDetails: any;
  user_mobile: any;
  incomming: any;
  ObservableVar: Subscription;
  udata: any;
  uid:any;
  uname: any;
  umobile: any;
  ucity: any;
  ucountry: any;
  uimage:any;
  ftoken: Token;
  user_id: any;
  call_type: any;
  constructor(
    private storage : Storage,
    private events : EventsService,
    private http: HttpClient,
    private route : Router,
    private platform: Platform,
    public alertController: AlertController,
    private statusBar: StatusBar,
   private screenOrientation: ScreenOrientation,
    ) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.storage.create();
      this.initializeApp();
      //this.InitializingApp()
  }
 
  settings(){
    this.storage.set("uid", this.uid);
    this.route.navigate(['/settings']);
  }

  async ngOnInit() {
    await this.storage.create();
    this.events.getObservable().subscribe((data)=>{
      console.log("Logged in Data:", data);
        this.udata= data;
        this.udata=this.udata.userdetails;
        this.uname=this.udata[0].name;
        this.umobile = this.udata[0].mobile;
        this.ucity = this.udata[0].city;
        this.ucountry = this.udata[0].country;
        this.uimage = this.udata[0].image;
        console.log("User Data", this.udata);
        this.storage.set("userdetails",this.udata);
      });
      this.storage.get("userdetails").then(data=>{
        console.log("Logged in  Storage Data:", data);
        this.udata= data;
        this.uname=this.udata[0].name;
        this.umobile = this.udata[0].mobile;
        this.ucity = this.udata[0].city;
        this.ucountry = this.udata[0].country;
        this.uimage = this.udata[0].image;
        console.log(this.udata);
      });
      this.ObservableVar= Observable.interval(3000).subscribe(()=>{
      this.CheckIncoming();
      });
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    
  };

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
       document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('hello');
        }, false);
        //alert("back button pressed")
      });
      this.statusBar.styleDefault();
    });
  }
  async InitializingApp(){
// Request permission to use push notifications
// iOS will prompt user and return if they granted permission or not
// Android will just grant without prompting
PushNotifications.requestPermissions().then(result => {
  if (result.receive === 'granted') {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();
  } else {
    // Show some error
  }
});

// On success, we should be able to receive notifications
PushNotifications.addListener('registration',
  (token: Token) => {
    this.ftoken=token;
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
        this.http.get(AppComponent.ApiUrl+"updatefcmid.php?user_id="+this.user_id+"token="+this.ftoken.value).subscribe(fres=>{
          console.log(fres);
        })
      });
  }
);

// Some issue with our setup and push will not work
PushNotifications.addListener('registrationError',
  (error: any) => {
    //alert('Error on registration: ' + JSON.stringify(error));
  }
);

// Show us the notification payload if the app is open on our device
PushNotifications.addListener('pushNotificationReceived',
  (notification: PushNotificationSchema) => {
    alert('New Message received: ' + JSON.stringify(notification));
  }
);

// Method called when tapping on a notification
PushNotifications.addListener('pushNotificationActionPerformed',
  (notification: ActionPerformed) => {
    //alert('Push action performed: ' + JSON.stringify(notification));
  }
);
  }

  CheckIncoming(){
    this.storage.get("userdetails").then((uval)=>{
      this.userDetails = uval;
    this.user_mobile = this.userDetails[0].mobile;
    if(this.user_mobile){
      this.http.get(AppComponent.ApiUrl+"checkincomming.php?user_mobile="+this.user_mobile).subscribe((incoming)=>{
        this.incomming = incoming;
        this.call_type = this.incomming[0].call_type
        console.log("incoming:",this.incomming);
        if(this.incomming!=0){
          if(this.call_type=='audio'){
            this.route.navigate(['/calls']);
          }
         else{
           this.route.navigate(['videocall'])
         }
        }
        else{
          //this.route.navigate(['home']);
        }
      })
  }

});
  }
}