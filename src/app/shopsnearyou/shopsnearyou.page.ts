import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopsnearyou',
  templateUrl: './shopsnearyou.page.html',
  styleUrls: ['./shopsnearyou.page.scss'],
})
export class ShopsnearyouPage implements OnInit {
  shopsNear: object;
  udata: object;
  ucity: any;
  lat:any;
  long:any;
  listing: any;
  position2: any;
  position3: any;
  posbanner3: any;
  pos3bid: any;
  position4: any;
  user_id: any;
  vrespo: any;
  position5:any;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  slideOpts:any;
  

  constructor(
    private http:HttpClient,
    private storage:Storage,
    private geolocation:Geolocation,
    private router:Router
  ) { }


  // sort(property) {
  //   this.isDesc = !this.isDesc; //change the direction    
  //   this.column = property;
  //   let direction = this.isDesc ? 1 : -1;

  //   this.shopsNear.sort(function (a, b) {
  //     if (a[property] < b[property]) {
  //       return -1 * direction;
  //     }
  //     else if (a[property] > b[property]) {
  //       return 1 * direction;
  //     }
  //     else {
  //       return 0;
  //     }
  //   });
  // };

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
  console.log("Shops Near You", this.shopsNear);
})
      })
      // Get position 2
this.http.get(AppComponent.ApiUrl + "getbanerpos2.php").subscribe(async data => {
  this.position2 = data;
  console.log("position 2", this.position2)
})

// Get position 3
this.http.get(AppComponent.ApiUrl + "getbanerpos3.php").subscribe(async data => {
  this.position3 = data;
  this.posbanner3 = this.position3[0].image;
  this.pos3bid = this.position3[0].bid;
  console.log("position 3", this.position3)
})

// Get position 4
this.http.get(AppComponent.ApiUrl + "getbanerpos4.php").subscribe(async data => {
  this.position4 = data;
  console.log("position 4", this.position5)
})

// Get position 5
this.http.get(AppComponent.ApiUrl + "getbanerpos5.php").subscribe(async data => {
  this.position5 = data;
  console.log("position 5", this.position5)
})
  }

  pos2details(i){
    this.storage.set("bid",this.position2[i].bid);
    this.router.navigate(['details']);
    this.Viewbusiness(this.position2[i].bid);
  }

  pos3details(){
    this.storage.set("bid",this.pos3bid);
    this.router.navigate(['details']);
    this.Viewbusiness(this.pos3bid);
  }

  pos4details(i){
    this.storage.set("bid",this.position4[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.position4[i].id);
  }

  // pos5details(i){
  //   this.storage.set("bid",this.position5[i].id);
  //   this.router.navigate(['details']);
  //   this.Viewbusiness(this.position5[i].id);
  // }

  details(i){
    this.storage.set("bid",this.shopsNear[i].id);
    this.Viewbusiness(this.shopsNear[i].id);
    this.router.navigate(['details']);
  }

  Viewbusiness(id){
    this.http.get(AppComponent.ApiUrl+"viewbusiness.php?bid="+id+"&user_id="+this.user_id).subscribe(vrespo=>{
      this.vrespo = vrespo;
      console.log("View Response:", this.user_id);
    })
  }

  gdetails(i){
    console.log(this.listing[i].place_id);
    this.storage.set("placeid",this.listing[i].place_id);
    this.router.navigate(['/gdetails']);
  }
}
