import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  pid: any;
  product: any;
  producttitle: any;
  producttags: any;
  measuringtype: any;
  measuringdetails: any;
  description: any;
  actualprice: any;
  discount_price: any;
  update: any;
  pro_image: any;
  banner: any;
  video: any;
  img1: any;
  img2: any;
  img3: any;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private router:Router,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("pid").then(val =>
      {
        this.pid = val;
        console.log("product id", this.pid);
        this.http.get(AppComponent.ApiUrl+"getproduct_details.php?prid="+this.pid).subscribe(data =>
          {
            this.product= data;
            this.producttitle = this.product[0].title;
            this.producttags = this.product[0].tag;
            this.measuringtype =  this.product[0].meassuring_type;
            this.measuringdetails =  this.product[0].meassuring_details;
            this.description =  this.product[0].description;
            this.actualprice =  this.product[0].mrp;
            this.discount_price =  this.product[0].discount_price;
            this.pro_image = this.product[0].product_image;
            this.banner = this.product[0].banner;
            this.video = this.product[0].video;
            this.img1 = this.product[0].img1;
            this.img2 = this.product[0].img2;
            this.img3 = this.product[0].img3;
            console.log(this.product);
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
      this.pro_image = 'data:image/jpeg;base64,' + imageData;
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

  submit(){
    var link = AppComponent.ApiUrl+"updateproduct.php";
    var myData = JSON.stringify({
      'pid' : this.pid,
      'producttitle' : this.producttitle,
      'producttags' : this.producttags,
      'measuringtype' : this.measuringtype,
      'measuringdetails' : this.measuringdetails,
      'description' : this.description,
      'actualprice' : this.actualprice,
      'discount_price' : this.discount_price,
    });
    console.log(myData);
    this.http.post(link,myData).subscribe(data =>{
      this.update = data;
      console.log(this.update);
      if(this.update == 1){
        //alert("Product Updated Sucesfully");
        this.router.navigate(['product']);
      
      }
    })
  }

}
