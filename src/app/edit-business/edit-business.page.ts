import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.page.html',
  styleUrls: ['./edit-business.page.scss'],
})
export class EditBusinessPage implements OnInit {
  bid: any;
  business:any
  business_name: any;
  owner_name:any;
  business_type:any;
  primary_contact:any;
  ownership_model:any;
  tags:any;
  business_address:any;
  cat_div = false;
  ser_div = false;
  options: any;
  services: any;
  categoreis:any;
  image: string;
  views: any;
  story: any;
  shopdesc: any;
  category_id: any;
  service_id: any;
  businessdata: Object;
  shopurl: any;
  city: any;
  pincode: any;
  country: any;
  state: any;

  constructor(
    private storage:Storage,
    private http: HttpClient,
    private camera:Camera,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val =>{
      this.bid=val;
      console.log("Business ID", this.bid);
      this.http.get(AppComponent.ApiUrl+"businessprofile.php?bid="+this.bid).subscribe(data =>
        {
          this.business = data;
          this.business_name = this.business[0].business_name;
          this.owner_name = this.business[0].owner_name;
          this.business_type = this.business[0].business_type;
          this.primary_contact = this.business[0].primary_contact;
          this.ownership_model = this.business[0].ownership_model;
          this.business_address = this.business[0].business_address;
          this.tags = this.business[0].tags;
          console.log("Business", this.business)
    })
    })
  }

  getserccat(data){
    console.log(this.ownership_model);
    if(this.ownership_model == "category"){
      this.cat_div = true;
      this.ser_div = false;
      this.http.get(AppComponent.ApiUrl+"getcategories.php").subscribe((cat)=>{
        this.options = cat;
        console.log("categories:", this.categoreis)
      })  
    }
    else{
      if(this.ownership_model == "services"){
        this.ser_div = true;
      this.cat_div = false;
      this.http.get(AppComponent.ApiUrl+"getservices.php").subscribe((ser)=>{
        this.services = ser;
        console.log("services:", this.services)
      })
      }
      else{
      this.ser_div = true;
      this.cat_div = true;
      this.http.get(AppComponent.ApiUrl+"getservices.php").subscribe((ser)=>{
        this.services = ser;
        console.log("services:", this.services)
      });
      this.http.get(AppComponent.ApiUrl+"getcategories.php").subscribe((cat)=>{
        this.options = cat;
        console.log("categories:", this.categoreis)
      }) ;
    }
        
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
  });
  
}

update(){
  var mydata = JSON.stringify({
    'image':this.image,
    'business_id': this.bid,
    'business_name': this.business_name,
    'business_type': this.business_type,
    'primary_contact': this.primary_contact,
    'owner_name': this.owner_name,
    'basis': this.ownership_model,
    'ownership_model': this.ownership_model,
    'firsttag': this.tags,
    'business_address': this.business_address,
    'view': this.views,
    'busienss_story': this.story,     
    'category_id':this.category_id,
    'service_id':this.service_id,
    'story':this.story,
    'shopurl':this.shopurl,
    'shopdesc':this.shopdesc,
    'city':this.city,
    'pincode' : this.pincode,
    'country':this.country,
    'state':this.state,
    
  });
  console.log(mydata)

   var link = AppComponent.ApiUrl + "updatebusiness.php";
   this.http.post(link, mydata).subscribe(data => {
     this.businessdata = data;
     if(this.businessdata == 1){
       this.router.navigate(["/my-business"]);
     }
     else {
       alert("Failed to update Business");
     }
   })
}

  }