import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-offersnearyou',
  templateUrl: './offersnearyou.page.html',
  styleUrls: ['./offersnearyou.page.scss'],
})
export class OffersnearyouPage implements OnInit {
  offersNear:any;
  udata: any;
  ucity: any;
  constructor(
    private http:HttpClient,
    private storage:Storage 
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        console.log(this.ucity);
  // Get Offers Near you 
this.http.get(AppComponent.ApiUrl + "offersnearyou.php?city="+this.ucity).subscribe(async data => {
  this.offersNear = data;
  console.log("Offers Near you",this.offersNear);
    })
      })
    }

}
