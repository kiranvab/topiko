import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-qr-reach',
  templateUrl: './my-qr-reach.page.html',
  styleUrls: ['./my-qr-reach.page.scss'],
})
export class MyQrReachPage implements OnInit {

  rand: any;
  myAngularxQrCode:any;
  qrdata: any;
  reg_number: any;
  username:any;
  constructor(
    private storage: Storage
  ) {
    this.storage.get("qr_data").then(val=>{
      this.qrdata = val;
      this.qrdata = JSON.parse(this.qrdata);
      console.log("QRdata", this.qrdata);
      this.myAngularxQrCode=this.qrdata.qr_id;
      console.log(this.myAngularxQrCode,'Code');
      this.reg_number = this.qrdata.reg_number;
      this.username = this.qrdata.name
      
    })
   }

  ngOnInit() {
  
  }

}
