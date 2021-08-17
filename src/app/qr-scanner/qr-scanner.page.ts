import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {

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
          text: 'History',
          handler: () => {
            this.route.navigate(['history']);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Detail',
          handler: () => {
            console.log('Archive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
