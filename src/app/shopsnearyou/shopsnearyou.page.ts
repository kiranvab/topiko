import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-shopsnearyou',
  templateUrl: './shopsnearyou.page.html',
  styleUrls: ['./shopsnearyou.page.scss'],
})
export class ShopsnearyouPage implements OnInit {
  shopsNear: Object;
  udata: any;
  ucity: any;
  lat:any;
  long:any;
  listing: any;

  constructor(
    private http:HttpClient,
    private storage:Storage,
    private geolocation:Geolocation
  ) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      console.log("Latitude", this.lat);
      console.log("Latitude", this.long);
     // this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.lat+','+this.long+'&radius=2500&type=shop&key=AIzaSyCPuQadZpFuDF9KOWFrlthnPRdRJb-QlrI').subscribe((response) =>
     this.http.get(AppComponent.ApiUrl+"localstores.php?lat="+this.lat+"&long="+this.long).subscribe(response =>
      {
        this.listing = response;
        this.listing = this.listing.results;
        console.log("Places", this.listing);
      })
    })
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        console.log(this.ucity);
    // Get Shops Near you 
this.http.get(AppComponent.ApiUrl + "shopsnearyou.php?city="+this.ucity).subscribe(async data => {
  this.shopsNear = data;
  //console.log("Shops Near You", this.shopsNear);
})
      })
  }

}
