import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-editshowcase',
  templateUrl: './editshowcase.page.html',
  styleUrls: ['./editshowcase.page.scss'],
})
export class EditshowcasePage implements OnInit {
  mybusiness: any;
  owner: any;
  address: any;
  busines_name: any;
  bid: any;
  branches: any;
  images: any;
  start: any;
  end: any;
  position: any;
  showcasediv: any = false;
  mainDiv: any = true;
  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage: Storage,
    private http: HttpClient,
    private camera: Camera,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.get("mybusiness").then((val) => {
      this.mybusiness = val;
      console.log("My business Details:", this.mybusiness);
      this.owner = this.mybusiness[0].owner_name;
      this.address = this.mybusiness[0].business_address;
      this.busines_name = this.mybusiness[0].business_name
      this.bid = this.mybusiness[0].id;
      this.http.get(AppComponent.ApiUrl + "getbranches.php?bid=" + this.bid).subscribe((res) => {
        this.branches = res;
        console.log('Branches', this.branches);
      })
    })
  }


  image(i) {
    console.log(i);
    this.position = i;
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.images = 'data:image/jpeg;base64,' + imageData;
    });

    this.showcasediv = false;
    this.mainDiv = true;

  }

  submit() {
    var link = AppComponent.ApiUrl + "addshowcase.php";
    var myData = JSON.stringify({
      'bid': this.bid,
      'image': this.images,
      'start': this.start,
      'end': this.end,
      'position': this.position
    })
    console.log("Showcase Data", myData);
    this.http.post(link, myData).subscribe(response => {
      if (response = 1) {
        alert("Show Case Added Sucesfully");
        this.router.navigate(['/my-business']);
      }
    })
  }



  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            console.log('Destructive clicked');
            this.route.navigate(['/editshowcase'])
          }
        }, {
          text: 'Payment History',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Details',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  showdiv() {
    this.showcasediv = true;
    this.mainDiv = false;
  }

}