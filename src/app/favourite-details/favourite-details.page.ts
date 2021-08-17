import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.page.html',
  styleUrls: ['./favourite-details.page.scss'],
})
export class FavouriteDetailsPage implements OnInit {
  segmentModel: string;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router
  ) {
    this.segmentModel = "order";
  }

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
