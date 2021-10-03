import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-gdetails',
  templateUrl: './gdetails.page.html',
  styleUrls: ['./gdetails.page.scss'],
})
export class GdetailsPage implements OnInit {
place:any;
  details: any;
  name: any;
  rating: any;
  address: any;
  reviews: any;
  type: any;
  place_id: any;
  photos: any = [];
  map_loc: any;
  open_close: any;
  segmentModel: string;
  hours:any;
  allphotos: any;
  leng: any;
  bphoto: any;
  converted_image: any;
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any;
  saturday: any;
  sunday: any;
  phoneno: any;
  console: any;
  lat:any;
  long:any;
  dest: any;


  constructor(
    private http:HttpClient,
    private storage:Storage,
    private CallNumber: CallNumber,
    private launchNavigator: LaunchNavigator,
    private geolocation:Geolocation,

  ) { 
    this.segmentModel = "details";
  }


  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      console.log("Latitude", this.lat);
      console.log("Latitude", this.long);
     
  });

    this.storage.get("placeid").then(val =>
      {
      this.place = val;

      this.http.get(AppComponent.ApiUrl+"gdetails.php?placeid="+this.place).subscribe(response => {
       // console.log(response);
        this.details = response;
      this.name = this.details.result.name;
      this.rating = this.details.result.rating;
      this.address = this.details.result.vicinity;
      this.reviews = this.details.result.reviews;
      this.type = this.details.result.types;
      this.place_id = this.details.result.place_id;
      this.map_loc =this.details.result.url;
      this.open_close = this.details.result.opening_hours.weekday_text;
      this.hours = this.details.result.opening_hours;
      this.photos = this.details.result.photos;
      this.allphotos = this.photos[0].photo_reference;
     this.monday = this.open_close[0];
     this.tuesday = this.open_close[1];
     this.wednesday = this.open_close[2];
     this.thursday = this.open_close[3];
     this.friday = this.open_close[4];
     this.saturday = this.open_close[5];
     this.sunday = this.open_close[6];
     this.phoneno = this.details.result.formatted_phone_number;
     this.dest = this.name + this.address
      console.log("open close", this.details);
      this.leng = this.photos.lenght;
      for (let item of this.photos) {
        if (item === this.leng) {
          return
        } 
    }   

      //console.log(AppComponent.ApiUrl+"getphotos.php?photo="+this.allphotos);
       this.http.get(AppComponent.ApiUrl+"getphotos.php?photo="+this.allphotos).subscribe(resphoto =>
        {
           //console.log("Business photos", resphoto);
           this.bphoto = resphoto;
           this.converted_image= "data:image/png;base64,"+this.bphoto;
         }
         )
      })
    }
      )
  }

  call()
  {
  console.log(this.phoneno);
    this.CallNumber.callNumber(this.phoneno, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  share(){
    console.log("Share");
  }

  navigate(){
    console.log("Navigate", this.geolocation.getCurrentPosition);
    let options: LaunchNavigatorOptions = {
      start: [this.lat,this.long],
    
    
    }
    
    this.launchNavigator.navigate(this.dest+', ON', options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  
  

}
