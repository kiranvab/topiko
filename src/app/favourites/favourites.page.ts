import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

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
          text: 'Un Favourite',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Mute Notification',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Customer Care',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Reach',
          handler: () => {
            console.log('Promotions clicked');
          },
        }, {
          text: 'Report',
          handler: () => {
            console.log('Promotions clicked');
          },
        }
      ]
    });
    await actionSheet.present();
  }

}
