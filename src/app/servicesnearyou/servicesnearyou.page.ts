import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  servicesNear: any;
  position2: any;
  position3: any;
  position4:any;
  position5:any;
  posbanner3: any;
  pos3bid: any;
  user_id: string;
  vrespo: any;
  

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private router:Router
  ) { }

  slideOpts = {
    allowTouchMove: false
 };

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

  Viewbusiness(id){
    this.http.get(AppComponent.ApiUrl+"viewbusiness.php?bid="+id+"&user_id="+this.user_id).subscribe(vrespo=>{
      this.vrespo = vrespo;
      console.log("View Response:", this.user_id);
    })
  }
}

