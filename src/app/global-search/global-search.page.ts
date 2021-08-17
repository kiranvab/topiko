import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.page.html',
  styleUrls: ['./global-search.page.scss'],
})
export class GlobalSearchPage implements OnInit {
  segmentModel: string;

  constructor(
    public actionsheetCtrl:ActionSheetController,
    public route:Router
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
          text: 'view',  
          handler: () => {  
            this.route.navigate(['plans']);
            console.log('Destructive clicked');  
          }  
        },{  
          text: 'Call',  
          handler: () => {  
            this.route.navigate(['verification'])
            console.log('Archive clicked');  
          }  
        }, {  
          text: 'Chat',   
          handler: () => {  
            console.log('Cancel clicked');  
          },  
        },
        {  
          text: 'Share',  
          handler: () => {  
            console.log('Promotions clicked');  
          },  
        }    
      ]  
    });  
    await actionSheet.present();  
  }  


}
