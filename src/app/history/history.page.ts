import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    public actionsheetCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            // this.route.navigate(['history']);
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
