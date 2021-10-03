import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-qr-payments',
  templateUrl: './qr-payments.page.html',
  styleUrls: ['./qr-payments.page.scss'],
})
export class QrPaymentsPage implements OnInit {
buid:any;
  businessupi: any;
  constructor(
    private http:HttpClient,
    private storage:Storage
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;

        this.http.get(AppComponent.ApiUrl+"getbusinessupi.php?bid="+this.buid).subscribe(data =>{
          this.businessupi = data;
          console.log(this.businessupi);
        })
      })
}

qrdetails(i){
  console.log(i);
  this.http.get(AppComponent.apply+"getupi.php?qrid="+this.businessupi[i].id).subscribe(data =>
    {
      console.log("upi detials", data);
      
    })
}
}
