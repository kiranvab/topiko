import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
buid:any;
  servicetitle: any;
  servicetags: any;
  description: any;
  actualprice: any;
  discount: any;
  router: any;
  addservice: any;
  image:any;
  banner: string;
  video: string;
  img1: string;
  img2: string;
  img3: string;
  upload_div:any=true;
  image_div:any = false;
  video_img:any = false;
  video_div:any = true;
banner_div : any = true;
banner_img : any = false;
img1_div : any = true;
img1_img : any = false
img2_div : any = true;
img2_img : any = false
img3_div : any = true;
img3_img : any = false

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
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
      this.upload_div = false;
      this.image_div = true;
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
      this.banner_img = true;
      this.banner_div = false;
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
      this.video_div = false;
      this.video_img = true;
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
      this.img1_div = false;
      this.img1_img = true
      
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
      this.img2_div = false;
      this.img2_img = true
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
      this.img3_div = false;
      this.img3_img = true
    });
  }
  submit(){
    var link=AppComponent.ApiUrl +"addservice.php" ; 
    var mydata=JSON.stringify({
       'bid':this.buid,
       'servicetitle':this.servicetitle,
       'servicetags':this.servicetags,                       
       'description':this.description,
       'actualprice':this.actualprice,
       'discount':this.discount,
       'image': this.image,
       'banner': this.banner,
       'video':this.video,
       'img1':this.img1,
       'img2':this.img2,
       'img3':this.img3
    });
    
       console.log(mydata)
         this.http.post(link, mydata).subscribe( async data=>{
          this.addservice = data;
          console.log("Service details", this.addservice);
          if(this.addservice == 1){
          this.router.navigate(['/service'])
          }
          else
          {
            alert("Something went wrong !");
          }
        });
      
      }

}
