import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-qr-reach',
  templateUrl: './add-qr-reach.page.html',
  styleUrls: ['./add-qr-reach.page.scss'],
})
export class AddQrReachPage implements OnInit {
  rand: any;
  @ViewChild('name') name;
  @ViewChild('mobile') mobile;
  @ViewChild('email') email;
  @ViewChild('purpose') purpose;
  @ViewChild('reg_number') reg_number;
  @ViewChild('nominee_name') nominee_name;
  @ViewChild('nomineecontact') nomineecontact;
  vehicle: string;
  image1_img:any;
  image2_img:any;
  image3_img:any;
  image4_img:any;
  udata: any;
  user_id: any;
  response: Object;
  
  constructor(
    private route:Router,
    private http:HttpClient,
    private scanner : QRScanner,
    private storage: Storage,
    private camera:Camera
  ) { }
  

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.rand);    
    this.storage.get("userdetails").then(val=>{
      this.udata=val;
      this.user_id = this.udata[0].id;
    }) 
  }

 cycle(){
   this.vehicle="Cycle";
 }
 fourwheel(){
   this.vehicle="4 wheeler";
 }

 twowheel(){
  this.vehicle="2 wheeler";
 }

 more(){
   this.vehicle = "more than 4 wheels";
 }

 image1(){
  const options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    this.image1_img = 'data:image/jpeg;base64,' + imageData;
  });
}

image2(){
  const options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    this.image2_img = 'data:image/jpeg;base64,' + imageData;
  });
}

image3(){
  const options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    this.image3_img = 'data:image/jpeg;base64,' + imageData;
  });
}

image4(){
  const options: CameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    this.image4_img = 'data:image/jpeg;base64,' + imageData;
  });
}

 Submit(){
   var link = AppComponent.ApiUrl+"addqr.php";
   var myData = JSON.stringify({
     'user_id': this.user_id,
     'name':this.name.value,
     'mobile':this.mobile.value,
     'email':this.email.value,
     'purpose': 'vehicle',
     'reg_number':this.reg_number.value,
     'nominee_name':this.nominee_name.value,
     'nominee_number':this.nomineecontact.value,
     'vehicle_type':this.vehicle,
     'qr_id':'t-'+this.rand,
     'image1' : this.image1_img,
     'image2' : this.image2_img,
     'image3' : this.image3_img,
     'image4' : this.image4_img,
   });
   console.log(myData);
   this.http.post(link, myData).subscribe(response=>{
     this.response = response;
     if(this.response==1){
       this.storage.set("qr_data", myData);
       this.route.navigate(['my-qr-reach']);
     }
   })
 }


}
