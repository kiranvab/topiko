import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
uid:any;
  constructor(
    private storage:Storage
  ) { }

  ngOnInit() {
    this.storage.get("uid").then(val =>
      {
      this.uid = val;
      console.log("user ID:", this.uid);
      })
  }

}
