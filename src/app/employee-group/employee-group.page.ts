import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-employee-group',
  templateUrl: './employee-group.page.html',
  styleUrls: ['./employee-group.page.scss'],
})
export class EmployeeGroupPage implements OnInit {
  segmentModel: string;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router
  ) {
    this.segmentModel = "designer";
  }

  ngOnInit() {
  }
  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'View Employee',
          handler: () => {
            this.route.navigate(['employee-view']);
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Rating',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Report',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Resignation Letter',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ]
    });
    await actionSheet.present();
  }
}