import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
ofid:any;
offers:any;
offimg:any;
title:any;
tag:any;
  from: any;
  to: any;
  discount_price: any;
  actual_price: any;
  offer:any;
  desc:any;
  oid:any;
  image: string;
  update: Object;
  constructor(
    public actionsheetCtrl:ActionSheetController,
    public route:Router,
    private storage:Storage,
    private http:HttpClient,
    private camera:Camera,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.storage.get("oid").then(val=>
      {
        this.ofid = val;
        console.log("OID", this.ofid)
        this.http.get(AppComponent.ApiUrl+"getofferbyid.php?oid="+this.ofid).subscribe(data=>
          {
            this.offers = data;
            this.oid = this.offers[0].id;
            this.offimg = this.offers[0].image;
            this.offer = this.offers[0].offer;
            this.tag = this.offers[0].tag;
            this.from = this.offers[0].start;
            this.to = this.offers[0].end; 
            this.desc = this.offers[0].description;
            this.discount_price = this.offers[0].discount_price;
            this.actual_price = this.offers[0].actual_price;
            console.log("Offers", this.offers);
          }
          );
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
    console.log("Submit Clicked");
    var link =AppComponent.ApiUrl+"updateoffer.php";
    var myData = JSON.stringify({
      "id":this.oid,
      "offer":this.offer,
      "actual_price":this.actual_price,
      "discount_price":this.discount_price,
      "description":this.desc,
      "image":this.image,
      "start":this.from,
      "end":this.to

    })
    console.log(myData);
    this.http.post(link,myData).subscribe(response =>
      {
        this.update = response;

        if(this.update = 1){
          alert("Offer Updated Sucesfully");
          this.route.navigate(['offers']);
        }
        else {
          alert ("Failed to update Offer");
        }
      })
  }

}
