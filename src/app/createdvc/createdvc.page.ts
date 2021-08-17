import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-createdvc',
  templateUrl: './createdvc.page.html',
  styleUrls: ['./createdvc.page.scss'],
})
export class CreatedvcPage implements OnInit {

  udata:any;
  umobile:any;
  uname:any;
  getValue: any;
  countries: Object;
  states: Object;
  cities: Object;
  state: any;
  country: any;
  city: any;
  postcode: any;
  add1: any;
  add2: any;
  add3: any;
  proffesion: any;
  workingin: any;
  designation: any;
  mail: any;
  about: any;
  tags: any;
  uid: any;
  image:any;

  constructor(
    private route:ActivatedRoute,
    private router : Router,
    private http : HttpClient,
    private storage:Storage,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val=> {
      this.udata = val;
      this.uname = this.udata[0].name;
      this.umobile = this.udata[0].mobile;
      this.uid = this.udata[0].id;
      console.log(this.udata);
    })
    this.http.get(AppComponent.ApiUrl+"getcountries.php").subscribe(country =>{
      this.countries = country;
      console.log(this.countries);
    })

    this.http.get(AppComponent.ApiUrl+"getstates.php").subscribe(state =>{
      this.states = state;
      console.log(this.states);
    })

    this.http.get(AppComponent.ApiUrl+"getcity.php").subscribe(city =>{
      this.cities = city;
      console.log(this.cities);
    })
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

  submit(){
    var link=AppComponent.ApiUrl+"createdvc.php";
      var carddata=JSON.stringify({
        'user_id':this.uid,
        'name':this.uname,
        'mobile':this.umobile,
        'country':this.country,
        'state':this.state,
        'city':this.city,
        'postcode':this.postcode,
        'add1':this.add1,
        'add2':this.add2,
        'add3' : this.add3,
        'profession' : this.proffesion,
        'workingin' : this.workingin,
        'designation' : this.designation,
        'mail' : this.mail,
        'about' : this.about,
        'tags' : this.tags,
        'image':this.image
      });
      console.log(carddata);
       this.http.post(link,carddata).subscribe(data=>{
         console.log(data);
      if(data == 1){
         let navigationExtras: NavigationExtras = {
           queryParams: {
             card: JSON.stringify(data)
           }
         };
         this.router.navigate(['mycard'], navigationExtras);
       }
       });
  }

}
