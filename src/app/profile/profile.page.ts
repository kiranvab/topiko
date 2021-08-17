import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  segmentModel: string;
  udata:any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage:Storage
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>{
      this.udata = val;
      console.log(this.udata);
    })
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Settings',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  async openProfile() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'View Profile',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Call',
          handler: () => {
            this.route.navigate(['calling']);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Delete Post',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Report',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}