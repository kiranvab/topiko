import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
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
  constructor(
    public actionsheetCtrl: ActionSheetController,
    public router: Router,
    private storage:Storage,
    private http:HttpClient,
    private geolocation:Geolocation
  ) { }

  ngOnInit() {
    this.storage.get("type").then(val =>
      {
        console.log("type", val);
        this.type = val;
        console.log("Cat type", this.type);
      
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

    this.http.get(AppComponent.ApiUrl+"gcategories.php?lat="+this.lat+"&long="+this.long+"&type="+this.type).subscribe(response => {
      this.cate = response;
      this.categories = this.cate.results;
      console.log("Categories", this.categories);
    })
  })
})
  }

  Details(i){
    console.log(this.categories[i].place_id);
    this.storage.set("placeid",this.categories[i].place_id);
    this.router.navigate(['/gdetails']);
  }

}
