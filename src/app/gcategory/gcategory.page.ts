import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-gcategory',
  templateUrl: './gcategory.page.html',
  styleUrls: ['./gcategory.page.scss'],
})
export class GcategoryPage implements OnInit {
  lat:any;
  long:any;
  cate:any;
  categories:any;
  type:any;
  open: any;
  open_close:any;
  dlatlng: any;
  dlng: any;
  dlat: any;
  dis:any;
  business: any;
  cat_id:any;
  sid: any;
  services: Object;
  user_id: string;
  vrespo: Object;
  udata: any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public router: Router,
    private storage:Storage,
    private http:HttpClient,
    private geolocation:Geolocation
  ) { }

  ngOnInit() {

    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
      })

    this.storage.get("catid").then(val =>
      {
        this.cat_id = val;
        console.log("Category Id", this.cat_id);
        this.http.get(AppComponent.ApiUrl + "getbusbycat.php?cat_id="+this.cat_id).subscribe(async data => {
          this.business = data;
          console.log("Business", this.business);
      })
      });

      this.storage.get("sid").then(sval =>
        {
          this.sid = sval;
          console.log("Service Id", this.sid);
          this.http.get(AppComponent.ApiUrl + "getbusbyservice.php?sid="+this.sid).subscribe(async data => {
            this.services = data;
            console.log("Services", this.services);
        })
        })

      
    this.storage.get("type").then(val =>
      {
        console.log("type", val);
        this.type = val;
        console.log("Cat type", this.type);
      
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

    this.http.get(AppComponent.ApiUrl+"gcategories.php?lat="+this.lat+"&long="+this.long+"&type="+this.type).subscribe(response => {
      this.cate = response;
      this.categories = this.cate.results;
      console.log("Categories", this.categories );
      this.http.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins='this.lat','this.long'+&destinations='this.dlat','this.dlng'&key=AIzaSyBW0TeLuYYvzuzEGXF53uxTEJ6PIcaF89w").subscribe(response =>
      {
        this.dis = response;
        console.log("Distance", this.dis);
    }
    )
    })
  })
})
  }

  gdetails(i){
    console.log(this.categories[i].place_id);
    this.storage.set("placeid",this.categories[i].place_id);
    this.router.navigate(['/gdetails']);
  }

  
  catdetails(i) {
    //console.log(this.recent[i].id);
    this.storage.set("bid",this.categories[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.categories[i].id);
  }

  serdetails(i) {
    //console.log(this.recent[i].id);
    this.storage.set("bid",this.services[i].id);
    this.router.navigate(['details']);
    this.Viewbusiness(this.services[i].id);
  }

  Viewbusiness(id){
    this.http.get(AppComponent.ApiUrl+"viewbusiness.php?bid="+id+"&user_id="+this.user_id).subscribe(vrespo=>{
      this.vrespo = vrespo;
      console.log("View Response:", this.user_id);
    })
  }
  ionViewDidLeave(){
    console.log("VIew Did Load");
    this.storage.remove("sid");
    this.storage.remove("catid");
  }


}

