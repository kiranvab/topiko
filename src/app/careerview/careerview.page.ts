import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-careerview',
  templateUrl: './careerview.page.html',
  styleUrls: ['./careerview.page.scss'],
})
export class CareerviewPage implements OnInit {

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router
  ) { }

  ngOnInit() {
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
