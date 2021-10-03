import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  sid: any;
  service: any;
  servicetitle: any;
  servicetags: any;
  description: any;
  mrp: any;
  discount: any;
  update: Object;
  image:any;
  banner:any
  video:any;
  img1:any;
  img2:any;
  img3:any;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("sid").then(val =>{
      this.sid = val;
      console.log(this.sid);
      console.log("getservice_details.php?sid="+this.sid);
      this.http.get(AppComponent.ApiUrl+"getservice_details.php?sid="+this.sid).subscribe(data =>
        {
          this.service = data;
          console.log(this.service);
           this.servicetitle = this.service[0].service_title; 
           this.servicetags = this.service[0].service_tag;
           this.description = this.service[0].description;
           this.mrp = this.service[0].mrp;
           this.discount = this.service[0].discount_price;
           this.image = this.service[0].image;
           this.video = this.service[0].video;
           this.banner = this.service[0].banner;
           this.img1 = this.service[0].img1;
           this.img2 = this.service[0].img2;
           this.img3 = this.service[0].img3;
        })
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

  getBanner(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((BannerData) => {
      this.banner = 'data:image/jpeg;base64,' + BannerData;
    });
  }

  getVideo(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((videoimg) => {
      this.video = 'data:image/jpeg;base64,' + videoimg;
    });

  }

  getImg1(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((img1Data) => {
      this.img1 = 'data:image/jpeg;base64,' + img1Data;
      
    });

  }

  getImg2(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((img2Data) => {
      this.img2 = 'data:image/jpeg;base64,' + img2Data;
    });
    
  }

  getImg3(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((img3Data) => {
      this.img3 = 'data:image/jpeg;base64,' + img3Data;
    });
  }


  submit()
  {
    console.log("Submit Clicked");
    var link = AppComponent.ApiUrl+"updateservice.php";
    var myData = JSON.stringify(
      {
        'sid': this.sid,
        'servicetitle' : this.servicetitle,
        'servicetags':this.servicetags,   
        'description': this.description,
        'actualprice': this.mrp,
        'discount': this.discount,
        'image': this.image,
        'banner': this.banner,
        'video':this.video,
        'img1':this.img1,
        'img2':this.img2,
        'img3':this.img3
      }
    );
    this.http.post(link,myData).subscribe(data =>
      {
        this.update = data;
        console.log("update", this.update);
        if (this.update == 1){
          alert("Service Updated Sucesfully");
        }
      }) 
  }
  
  
}
