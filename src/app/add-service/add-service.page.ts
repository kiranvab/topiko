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
       'image': this.image
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
