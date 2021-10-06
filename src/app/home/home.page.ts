import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  all: any = false;
  categories: any;
  services:any;
  featured:any;
  banners:any;
  offers: any;
  recent: any;
  offersNear: any;
  shopsNear: any;
  servicesNear: any;
  udata: any;
  ucity: any;
  position1: any;
  position2: any;
  position3: any;
  position4: any;
  position5: any;
  posbanner1: any;
  posbanner3: any;
  lat:any;
  long:any;
  cat: string;
  listing: any;
  list: any;
  uname: any;
  user_id:any;
  vrespo:any;
  pos1bid: any;
  pos3bid: any;
  allcategories: any;
  allservices: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay:true
  };

  constructor(
    private http:HttpClient,
    private storage:Storage,
    private geolocation:Geolocation,
    private router:Router
  ) {
    
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        if(!this.udata){
          this.router.navigate(['login']);
        }
      });
   }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      console.log("Latitude", this.lat);
      console.log("Latitude", this.long);
     
    })
    // Get User Details
    
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        this.user_id = this.udata[0].id;
        console.log(this.ucity);

        // Get Offers Near you 
this.http.get(AppComponent.ApiUrl + "homeoffersnearyou.php?city="+this.ucity).subscribe(async data => {
  this.offersNear = data;
  console.log("Offers Near you",this.offersNear);
})

// Get Shops Near you 
this.http.get(AppComponent.ApiUrl + "homeshopsnearyou.php?city="+this.ucity).subscribe(async data => {
  this.shopsNear = data;
  console.log("Shops Near You", this.shopsNear);
})

// Get Services Near you 
this.http.get(AppComponent.ApiUrl + "homeservicesnearyou.php?city="+this.ucity).subscribe(async data => {
  this.servicesNear = data;
  //console.log("Services Near you", this.servicesNear);
})

// Get Recent Viewed
this.http.get(AppComponent.ApiUrl + "homerecentviews.php?user_id="+this.user_id).subscribe(async data => {
  this.recent = data;
 console.log(this.recent);
 })
    });

    // Get Categories
    this.http.get(AppComponent.ApiUrl + "gethomecategories.php").subscribe(async data => {
      this.categories = data;
      console.log("categories", this.categories);
  })

  // Get Services
  this.http.get(AppComponent.ApiUrl + "gethomeservices.php").subscribe(async data => {
    this.services = data;
    //console.log(this.services);
  })

  

   // Get All Categories
   this.http.get(AppComponent.ApiUrl + "getcategories.php").subscribe(async data => {
    this.allcategories = data;
    console.log("categories", this.categories);
})

// Get All Services
this.http.get(AppComponent.ApiUrl + "getservices.php").subscribe(async data => {
  this.allservices = data;
  //console.log(this.services);
})

// Get Featured
this.http.get(AppComponent.ApiUrl + "featured.php").subscribe(async data => {
  this.featured = data;
  console.log("Featured", this.featured);
})

// Get Banners
this.http.get(AppComponent.ApiUrl + "getbanners.php").subscribe(async data => {
  this.banners = data;
  //console.log("Banners", this.banners);
})

// Get Offers
this.http.get(AppComponent.ApiUrl + "getoffers.php").subscribe(async data => {
  this.offers = data;
  //console.log("Offers", this.offers);
})

// Get position 1
this.http.get(AppComponent.ApiUrl + "getbanerpos1.php").subscribe(async data => {
  this.position1 = data;
  this.posbanner1 = this.position1[0].image;
  this.pos1bid = this.position1[0].bid;
  console.log("position1", this.position1);
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
  console.log("position 4", this.position4)
})

// Get position 5
this.http.get(AppComponent.ApiUrl + "getbanerpos5.php").subscribe(async data => {
  this.position5 = data;
  console.log("position 5", this.position5)
})

// Get Recent Viewed
// this.http.get(AppComponent.ApiUrl + "recentlyviewed.php").subscribe(async data => {
//   this.recent = data;
//   console.log(this.recent);
// })

}

category(i){
  console.log("type", this.categories[i].type)
 this.storage.set("type", this.categories[i].type)
 this.storage.set("catid", this.categories[i].id)
 this.router.navigate(['gcategory']);
}

service(i){
 console.log("type", this.services[i].type);
 this.storage.set("type", this.services[i].type)
 this.storage.set("sid", this.services[i].id)
 this.router.navigate(['gcategory']);
}

offersdetails(i){
  console.log(this.offersNear[i].bid);
   console.log(this.offersNear[i].bid);
   this.storage.set("bid", this.offersNear[i].bid)
   this.router.navigate(['details']);
}


details(i) {
  //console.log(this.recent[i].id);
  this.storage.set("bid",this.recent[i].id);
  this.router.navigate(['details']);
  this.Viewbusiness(this.recent[i].id);
}


  showall() {
  
    if(this.all == true){
      this.all = false;
    }
    else{
      this.all = true;
    }
  }

  pos1details(){
    this.storage.set("bid",this.pos1bid);
    this.router.navigate(['details']);
    this.Viewbusiness(this.pos1bid);
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

  pos5details(i){
    this.storage.set("bid",this.position5[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.position5[i].id);
  }
  
  fedetials(i){
    this.storage.set("bid",this.featured[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.featured[i].id);
  }

  getdetials(i){
    this.storage.set("bid",this.shopsNear[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.shopsNear[i].id);
  }

  
  Viewbusiness(id){
    this.http.get(AppComponent.ApiUrl+"viewbusiness.php?bid="+id+"&user_id="+this.user_id).subscribe(vrespo=>{
      this.vrespo = vrespo;
      console.log("View Response:", this.user_id);
    })
  }

}
