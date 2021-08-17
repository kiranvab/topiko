import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-person-connect',
  templateUrl: './person-connect.page.html',
  styleUrls: ['./person-connect.page.scss'],
})
export class PersonConnectPage implements OnInit {

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
          text: 'Emergency',
          handler: () => {
            this.route.navigate(['calling']);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Other',
          handler: () => {
            this.route.navigate(['calling']);
            console.log('Archive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  async openMsg() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Emergency',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Other',
          handler: () => {
            console.log('Archive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
