import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {

  rand: any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router
  ) { }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.rand);
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Detail',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
