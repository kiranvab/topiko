import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-qr-payments',
  templateUrl: './add-qr-payments.page.html',
  styleUrls: ['./add-qr-payments.page.scss'],
})
export class AddQrPaymentsPage implements OnInit {
buid:any;
branches:any;
branch: any;
  upi: any;
  upi_numner: any;
  bank_name: any;
  branch_name: any;
  ifsc: any;
  acc_no: any;
  acc_type: any;
  acc_name: any;
  upidetails: any;
  image:any;
  constructor(
    private storage:Storage,
    private router:Router,
    private http:HttpClient,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
        this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe(data =>{
          this.branches = data;
          console.log(this.branches);
        })
      })
  }

  getPicture(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    });
  }

  submit(){
    var link = AppComponent.ApiUrl+"addbusinesupi.php";
    var myData = JSON.stringify({
      "bid":this.buid,
      "branch_id":this.branch,
      "upi_name":this.upi,
      "upi_number":this.upi_numner,
      "bank_name":this.bank_name,
      "branch_name":this.branch_name,
      "ifsc":this.ifsc,
      "account_number":this.acc_no,
      "account_type":this.acc_type,
      "holder_name" :this.acc_name,
      "image":this.image
    })
    console.log("upi Data", myData);
    this.http.post(link,myData).subscribe(data =>
      {
        this.upidetails = data;
        if(this.upidetails == 1){
          this.router.navigate(['qr-payments']);
        }
        console.log(this.upidetails)
      }
      )
  }
  
}
