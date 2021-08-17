import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  segmentModel: string;

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
          text: 'Customer Care',
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
        {
          text: 'Reminder',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
