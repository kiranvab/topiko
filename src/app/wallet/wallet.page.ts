import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  segmentModel: string;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router
  ) {
    this.segmentModel = "designer";
  }

  ngOnInit() {
  }
  async openPayment() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Payment History',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ]
    });
    await actionSheet.present();
  }

}
