import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
 producttitle:any;
 producttags:any;
 measuringtype:any;
 measuringdetails:any;
 description:any;
 actualprice:any;
 discount:any;
  addproduct: Object;
  tags = ['Ionic', 'Angular', 'TypeScript'];
  accept=false;
  buid: any;
  uoms:any;
 
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
    private http: HttpClient,
    private storage: Storage,
    private alertCtrl: AlertController,
    private camera:Camera,
    private router: Router) { }

    ngOnInit() {
      this.storage.get("bid").then(val=>
        {
          this.buid = val;
          console.log(this.buid);
        })
        this.http.get(AppComponent.ApiUrl+"uoms.php").subscribe(resposne =>
          {
            this.uoms = resposne;
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
  var link=AppComponent.ApiUrl +"addproduct.php" ; 
  var mydata=JSON.stringify({
    'bid':this.buid,
     'producttitle':this.producttitle,
     'producttags':this.producttags,                       
     'measuringtype':this.measuringtype,
     'measuringdetails':this.measuringdetails,
     'description':this.description,
     'actualprice':this.actualprice,
     'discount':this.discount,
     'image':this.image,
     'banner': this.banner,
     'video':this.video,
     'img1':this.img1,
     'img2':this.img2,
     'img3':this.img3
  });
  
     console.log(mydata)
      this.http.post(link, mydata).subscribe( async data=>{
       this.addproduct = data;
       console.log("product details", this.addproduct);
       this.router.navigate(['product']);
      });
    
    }

    checkbox()
    {
      this.accept=!this.accept;
    }
    
}




