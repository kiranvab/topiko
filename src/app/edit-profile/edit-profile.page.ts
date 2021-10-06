import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  uid: any;
  user_image: any;
  name: any;
  profile: any;
  uname: any;
  profession: any;
  uimage: any;
  mobile: any;
  upd: Object;
  email: any;
  // designation: any;

  constructor(
    private storage: Storage,
    private camera: Camera,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

    this.storage.get("uid").then(val => {
      this.uid = val;
      console.log("user ID:", this.uid);
      this.http.get(AppComponent.ApiUrl + "profile.php?user_id=" + this.uid).subscribe(data => {
        this.profile = data
        this.uid = this.profile[0].id;
        this.name = this.profile[0].name;
        this.mobile = this.profile[0].mobile
        this.email = this.profile[0].email
        this.profession = this.profile[0].profession;
        this.uimage = this.profile[0].image;
        console.log(this.profile);
      })
    })
  }

  adduserImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user_image = base64Image
    }, (err) => {

    });
  }

  update() {
    var link = AppComponent.ApiUrl + "updateprofile.php";
    var emp = JSON.stringify({
      "user_id" :this.uid,
      "image":this.uimage,
      "name": this.name,
      "mobile": this.mobile,
      "email": this.email,
      // "designation": this.designation
    })
    console.log(emp);
    this.http.post(link, emp).subscribe(Response => {
      this.upd = Response;
      console.log(this.upd);
      if (this.upd == 1) {
        alert("Profile Updated Sucesfully");
        this.router.navigate(['profile']);
      }
      else {
        alert("Failed To Update Profile");
      }
    })
  }

}
