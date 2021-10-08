import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.page.html',
  styleUrls: ['./create-business.page.scss'],
})
export class CreateBusinessPage implements OnInit {
  bid: any;
  bpin: any;
  businessname: any;
  type: any;
  number: any;
  ownername: any;
  basis: any;
  mode: any;
  businessdata: Object;
  tag1: any;
  tag2: any;
  tag3: any;
  add1: any;
  add2: any;
  add3: any;
  country: any;
  state: any;
  pincode: any;
  accept = false;
  cat_div = false;
  ser_div = false;
  lat: any;
  long: any;
  udata: any;
  uid: any;
  categoreis: any;
  services: any;
  image: string;
  options:any;
  shopurl:any;
  shopdesc:any;
  service_id:any;
  category_id:any;
  upload_div:any=true;
  image_div:any = false;
  overview:any = true;
  address:any = false;
  description:any = false;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertCtrl: AlertController,
    private router: Router,
    private geolocation: Geolocation,
    private camera:Camera
  ) {
    this.http.get(AppComponent.ApiUrl+"getcategories.php").subscribe((cat)=>{
      this.categoreis = cat;
      console.log("categories:", this.categoreis)
    });

    this.http.get(AppComponent.ApiUrl+"getservices.php").subscribe((ser)=>{
      this.services = ser;
      console.log("services:", this.services)
    })
   }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata = val;
        this.uid = this.udata[0].id;
      }
      )
    this.bid = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.bid);
    this.bpin = Math.floor(Math.random() * 1000) + 1000;
    console.log(this.bpin);

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.long);
    });
  }

  getserccat(data){
    console.log(this.mode);
    if(this.mode == "category"){
      this.cat_div = true;
      this.ser_div = false;
      this.http.get(AppComponent.ApiUrl+"getcategories.php").subscribe((cat)=>{
        this.options = cat;
        console.log("categories:", this.categoreis)
      })  
    }
    else{
      this.ser_div = true;
      this.cat_div = false;
      this.http.get(AppComponent.ApiUrl+"getservices.php").subscribe((ser)=>{
        this.services = ser;
        console.log("services:", this.services)
      })
    }
    
  }

  getPicture(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.upload_div = false;
      this.image_div = true;
    });
    
  }

  submit() {
     if(this.image == ''){
       alert("Please Upload Business image / Logo")
     }
     else{
    var mydata = JSON.stringify({
      'uid':this.uid,
      'image':this.image,
      'business_id': this.bid,
      'pin': this.bpin,
      'business_name': this.businessname,
      'business_type': this.type,
      'primary_contact': this.number,
      'owner_name': this.ownername,
      'basis': this.basis,
      'ownership_model': this.mode,
      'firsttag': this.tag1,
      'business_address': this.add1 + this.add2 + this.add3,
      'country': this.country,
      'state': this.state,
      'pincode': this.pincode,
      'view': this.tag2,
      'busienss_story': this.tag3,
      'shopurl':this.shopurl,
      'shopdesc':this.shopdesc,      
      'longitude': this.long,
      'latitude': this.lat,
      'category_id':this.category_id,
      'service_id':this.service_id
    });
    console.log(mydata)

    var link = AppComponent.ApiUrl + "create_business.php"
    this.http.post(link, mydata).subscribe(async data => {
      this.businessdata = data;
      console.log("userdetails", this.businessdata);
      if (this.businessdata == "Data already Exists") {
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          message: 'Business Already Exist',
          buttons: ['OK']
        });
        await alert.present();
        //this.router.navigate(['my-business']);
      }

      else {
        this.router.navigate(['my-business']);
      }
    });
   }
  }

  checkbox() {
    this.accept = !this.accept;
  }
  next1(){
    this.overview = false;
    this.address = true;
  }

  next2(){
    this.address = false;
    this.description = true;
  }
  
  prev1(){
    this.overview = true;
    this.address = false;
  }

  prev2(){
    this.address = true;
    this.description = false;
  }

}
