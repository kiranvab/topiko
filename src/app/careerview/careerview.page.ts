import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-careerview',
  templateUrl: './careerview.page.html',
  styleUrls: ['./careerview.page.scss'],
})
export class CareerviewPage implements OnInit {
  udata: any;
  uid: any;
  uname: any;
  ucity: any;
  umobile: any;
  uimg:any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage:Storage,
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>{
      this.udata = val;
      this.uid = this.udata[0].id;
      this.uname = this.udata[0].name;
      this.ucity = this.udata[0].city
      this.umobile = this.udata[0].mobile
      this.uimg = this.udata[0].image;
      console.log(this.udata);
    })
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Apply',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
