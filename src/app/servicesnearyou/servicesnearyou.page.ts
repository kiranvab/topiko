import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-servicesnearyou',
  templateUrl: './servicesnearyou.page.html',
  styleUrls: ['./servicesnearyou.page.scss'],
})
export class ServicesnearyouPage implements OnInit {
  udata: any;
  ucity: any;
  servicesNear: Object;

  constructor(
    private storage:Storage,
    private http:HttpClient
  ) { }

  ngOnInit() {

    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        console.log(this.ucity);
    this.http.get(AppComponent.ApiUrl + "servicesnearyou.php?city="+this.ucity).subscribe(async data => {
      this.servicesNear = data;
      //console.log("Services Near you", this.servicesNear);
    })
  })
}
}

