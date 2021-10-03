import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-favourite-details',
  templateUrl: './favourite-details.page.html',
  styleUrls: ['./favourite-details.page.scss'],
})
export class FavouriteDetailsPage implements OnInit {
  segmentModel: string;
  fav_id: any;
  business_id: string;
  bdetails: Object;
  name: any;
  owner_name: any;
  address: any;
  city: any;
  state: any;
  country: any;
  pincoce: any;
  story: any;
  business_image: any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage:Storage,
    private http:HttpClient,
  ) {
    this.segmentModel = "order";
  }

  ngOnInit() {
    this.storage.get("fav_id").then((val)=>{
        this.fav_id= val;
        this.http.get(AppComponent.ApiUrl+"getbusinessdetails.php?bid="+this.fav_id).subscribe((response)=>{
          this.bdetails = response;
          console.log("business details:" ,this.bdetails);
          this.name = this.bdetails[0].business_name;
          this.owner_name = this.bdetails[0].owner_name;
          this.address = this.bdetails[0].business_address;
          this.city = this.bdetails[0].city;
          this.state=this.bdetails[0].state;
          this.country= this.bdetails[0].country;
          this.pincoce =this.bdetails[0].pincode;
          this.story = this.bdetails[0].busienss_story;
          this.business_image = this.bdetails[0].logo;
        });
    }) 
   }

  async openMenu() {
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
            this.storage.set("bid",this.fav_id);
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

}
