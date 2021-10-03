import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-qr-reach',
  templateUrl: './edit-qr-reach.page.html',
  styleUrls: ['./edit-qr-reach.page.scss'],
})
export class EditQrReachPage implements OnInit {

  qr_id: any;
  udata: any;
  user_id: any;
  uimage: any;
  myqr: any;
  qrid:any;
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  email: any;
  mobile: any;
  name: any;
  nominee_mobile: any;
  nominee_name: any;
  purpose: any;
  registration_number: any;
  vehicle_type: any;
  upd: any;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
        this.uimage = this.udata[0].image;
        console.log("UserID", this.uimage);
        
      })
   this.storage.get("qrid").then(val =>{
     this.qr_id = val;
    console.log("QRID:", this.qr_id);
    this.http.get(AppComponent.ApiUrl+"getqrreach.php?qrid="+this.qr_id).subscribe(qrdata =>
      {
      this.myqr = qrdata;
      this.qrid=qrdata[0].qr_id;
      this.image1=qrdata[0].image1;
      this.image2=qrdata[0].image2;
      this.image3=qrdata[0].image3;
      this.image4=qrdata[0].image4;
      this.email=qrdata[0].email;
      this.mobile=qrdata[0].mobile;
      this.name=qrdata[0].name;
      this.nominee_mobile=qrdata[0].nominee_mobile;
      this.nominee_name=qrdata[0].nominee_name;
      this.purpose=qrdata[0].purpose  ;
      this.registration_number=qrdata[0].registration_number;
      this.vehicle_type=qrdata[0].vehicle_type;
      console.log(this.myqr);
    })
   })
  }

  update(){
    var link = AppComponent.ApiUrl+"updateqrreach.php";
    var updata = JSON.stringify({
      "qrid":this.qr_id,
      "name":this.name,
      "mobile":this.mobile,
      "email":this.email,
      "reg_no":this.registration_number,
      "nominee_name" :this.nominee_name,
      "nominee_mobile":this.nominee_mobile
    })
    console.log(updata);
    this.http.post(link,updata).subscribe(response =>
      {
        this.upd = response
        if(this.upd = 1){
          alert("Qr Reach Updated");
          this.router.navigate(['qrreach']);
        }
        else
        {
          alert("Failed to Update");
        }
      })
  }

}
