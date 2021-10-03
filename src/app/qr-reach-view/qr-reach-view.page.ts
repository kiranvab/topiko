import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-qr-reach-view',
  templateUrl: './qr-reach-view.page.html',
  styleUrls: ['./qr-reach-view.page.scss'],
})
export class QrReachViewPage implements OnInit {
  qr_id:any;
  qrdetails:any;
  udata:any;
  uimage:any;
  uaddress:any;
  constructor(
    private http:HttpClient,
    private storage:Storage
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.uimage = this.udata[0].image;
        this.uaddress = this.udata[0].address;
        console.log("UserID", this.uimage);
      })
    this.storage.get("qrid").then(val =>
      {
        this.qr_id = val;
        console.log("QRID:",this.qr_id);
        this.http.get(AppComponent.ApiUrl+"getqrreach.php?qrid="+this.qr_id).subscribe(response => {
          this.qrdetails = response;
          console.log("QR Deials", this.qrdetails);
        })
      })
  }

}
