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
  image:any;
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
     'image':this.image
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




