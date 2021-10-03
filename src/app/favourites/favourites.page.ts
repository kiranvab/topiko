import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  udata: any;
  user_id: any;
  mafav: Object;
  myfav: Object;
  segmentModel:string;
  myfavP: Object;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage:Storage,
    private http:HttpClient
  ) {
    this.segmentModel="business";
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;

        this.http.get(AppComponent.ApiUrl+"myfavorites.php?user_id="+this.user_id).subscribe(response=>{
          this.myfav = response;
          console.log('Myfavourite shops', this.myfav);
        })

        
        this.http.get(AppComponent.ApiUrl+"myfavproducts.php?user_id="+this.user_id).subscribe(response=>{
          this.myfavP = response;
          console.log('Myfavourite Products', this.myfavP);
        })

      });
   }

  ngOnInit() {
  }

  async openMenu(i) {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Un Favourite',
          handler: () => {
            alert("Request Submitted")
          }
        }, {
          text: 'Mute Notification',
          handler: () => {
            alert("Notifications Muted.")
          }
        }, {
          text: 'Customer Care',
          handler: () => {
            this.storage.set("bid",this.myfav[i].id);
            this.route.navigate(['connect']);
          },
        },
        {
          text: 'Reach',
          handler: () => {
            alert("Reach us on 040-1111111")
          },
        }, {
          text: 'Report',
          handler: () => {
            alert("mail us on compliance@topiko.com")
          },
        }
      ]
    });
    await actionSheet.present();
  }

  Details(i){
    this.storage.set("fav_id",this.myfav[i].id);
    this.route.navigate(['favourite-details']);
  }

}
