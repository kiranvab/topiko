import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  segmentModel:string;
  details_place_id: any;
  details: any;
  name: any;
  rating: any;
  address: any;
  reviews: any;
  type: any;
  place_id: any;
  photos: any;
  map_loc: any;
  open_close: any;
  business_id: any;
  bdetails: any;
  products: any;
  owner_name: any;
  city: any;
  state: any;
  country: any;
  pincoce: any;
  story: any;
  business_image:any;
  udata: any;
  user_id: any;
  router: any;
  services:any;
  constructor(
    public actionsheetCtrl:ActionSheetController,
    public alertCtrl:AlertController,
    private storage:Storage,
    private http:HttpClient,
    private route: Router
  ) { 
    this.segmentModel="topiko";
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
        if(!this.udata){
          this.router.navigate(['login']);
        }
      });
  }

  ngOnInit() {
    this.storage.get("bid").then((bval)=>{
      this.business_id = bval;
      this.http.get(AppComponent.ApiUrl+"getbusinessdetails.php?bid="+this.business_id).subscribe((response)=>{
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

      this.http.get(AppComponent.ApiUrl+"getproducts.php?bid="+this.business_id).subscribe((presponse)=>{
        this.products = presponse;
        console.log("Products:" ,this.products);
      })

      this.http.get(AppComponent.ApiUrl+"getbusiness_services.php?bid="+this.business_id).subscribe((sresponse)=>{
        this.services = sresponse;
        console.log("service:" ,this.services);
      })
    })
  }

  async openMenu() {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Reach',  
          handler: () => {  
            console.log('Destructive clicked');  
            this.presentAlert();
          }  
        },{  
          text: 'Hide',  
          handler: () => {  
           console.log('Archive clicked');  
          }  
        },{  
          text: 'Report',  
          handler: () => {  
           console.log('Archive clicked');  
          }  
        },{  
          text: 'Rating',  
          handler: () => {  
           console.log('Archive clicked');  
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  }
kalyan(){
  console.log("Handle Clicked under kalyan functions");
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Reach with',
    message: '<ion-row><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Chat</ion-col><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Video</ion-col><ion-col><img src="https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png">Call</ion-col></ion-row>'
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

productDetials(i){
  this.storage.set("prid", this.products[i].id);
  this.route.navigate(['item']);
}

likebusiness(){
  this.http.get(AppComponent.ApiUrl+"addlike.php?user_id="+this.user_id+"&bid="+this.business_id).subscribe(ldata=>{
    if(ldata==1){
      alert("thank you for liking buisnes");
    }
  })
}


favbusiness(){
  this.http.get(AppComponent.ApiUrl+"addfavorite.php?user_id="+this.user_id+"&bid="+this.business_id).subscribe(fdata=>{
    if(fdata==1){
      alert("Added busines to your favorite");
    }
  })
}
}


