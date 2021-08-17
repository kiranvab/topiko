import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { AlertController, MenuController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: any;
  phone: any;
  details: Object;
  lat:any;
  long:any;
  location:any;
  country:any;
  state: any;
  city: any;
  area: any;
  pincode: any;
  mylocation:any;
  mylength: any;
  phoneno: any;

  constructor( 
    private http:HttpClient, 
    private geolocation:Geolocation,
    private storage:IonicStorageModule, 
    private alertCtrl: AlertController,
    private router: Router,
    private device:Device,
  

    ) { }

  ngOnInit() {
    
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      console.log("Latitude", this.lat);
      console.log("Latitude", this.long);
      this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+this.long+"&result_tyep=street_number&key=AIzaSyCPuQadZpFuDF9KOWFrlthnPRdRJb-QlrI").subscribe((data)=>{
        this.location=data;
        console.log(location,"Location");
        this.mylocation = this.location.results[1].address_components;
        this.mylength = this.mylocation.length;
        console.log("location.length", this.mylength);
        console.log("location Details", this.mylocation);
         this.area = this.mylocation[this.mylength-6].long_name;
         this.city = this.mylocation[this.mylength-5].long_name;
         this.state = this.mylocation[this.mylength-3].long_name;
         this.country = this.mylocation[this.mylength-2].long_name;
         this.pincode = this.mylocation[this.mylength-1].long_name;
        console.log(this.area, this.city, this.state, this.pincode, this.country)
    })
  })
  }

  onChange(value){
    var phoneno = value;
    var len = phoneno.length;
    var name = this.name;
         if(len == 10){
           this.login();
         }
  }

login(){  
  console.log(this.name);
  console.log(this.phone);
 
  var link = AppComponent.ApiUrl+"register.php";
  var mydata = JSON.stringify({
    'name':this.name,
    'mobile':this.phone,
    'longitude':this.long,
    'latitude':this.lat,
    'pincode':this.pincode,
    'area':this.area,
    'city':this.city,
    'state':this.state,
    'country':this.country,
    'os':"Android",
    'notification_id':"1234",
    'referral_code':"12345"
  });
  console.log(mydata);

  this.http.post(link,mydata).subscribe(data=>{
  this.details = data;
  console.log("User Details", this.details);
  if(this.details == "Mobile already Exists"){
    alert("Mobile Number Already Exist");
    this.router.navigate(['relogin']);
  }
  else
  {
   let navigationExtras: NavigationExtras = {
        queryParams: {
          user: JSON.stringify(this.details)
        }
      };
      this.router.navigate(['otp'], navigationExtras);
  }

  console.log(this.details);
    
  });
}

}

