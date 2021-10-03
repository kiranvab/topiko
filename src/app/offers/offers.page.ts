import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  buid: any;
  offers: any;

  constructor(
    public actionsheetCtrl:ActionSheetController,
    public route:Router,
    private storage:Storage,
    private http:HttpClient,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log("BID", this.buid)
      })
      this.getoffers();
  }

  getoffers(){
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
    this.http.get(AppComponent.ApiUrl+"getbusinessoffers.php?bid="+this.buid).subscribe(data=>
      {
        this.offers = data;
        console.log("Offers", this.offers);
      }
      );
    })
  }



  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
            console.log('Destructive clicked'); 
            this.storage.set("oid",  this.offers[i].id); 
            this.route.navigate(['/edit-offer'])
          }  
        },{  
          text: 'Delete',  
          handler: () => {  
           console.log('Archive clicked'); 
           this.presentAlertConfirm(i);
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  } 


  async presentAlertConfirm(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are You sure <strong>do you want to Delete</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            console.log(this.offers[i].id);
            this.http.get(AppComponent.ApiUrl+"deleteoffer.php?oid="+this.offers[i].id).subscribe(data =>{
              console.log("Response", data);
              this.AlertDelete();
              this.getoffers();

            })
          }
        }
      ]
    });

    await alert.present();
  }

  async AlertDelete(){
  
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deleted!',
      message: 'Offer has been deleted sucesfully.',
      buttons: ['OK']
    });
    

    await alert.present();
    this.getoffers();
    window.location.reload();
    
  }

}
