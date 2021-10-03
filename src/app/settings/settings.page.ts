import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  uid:any;
  profile:any;
  uname: any;
  profession: any;
  uimage:any;
  constructor(
    private storage:Storage,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("uid").then(val =>
      {
      this.uid = val;
      this.http.get(AppComponent.ApiUrl+"getprofile.php?user_id="+this.uid).subscribe( data =>
        {
          this.profile = data;
          this.uid = this.profile[0].id;
          this.uname = this.profile[0].name;
          this.profession = this.profile[0].profession;
          this.uimage = this.profile[0].image;
          console.log(this.profile);
        })
    }
      )
  }

  editprofile()
  {
    this.storage.set("uid", this.uid);
    this.router.navigate(['/edit-profile']);
  }

}
