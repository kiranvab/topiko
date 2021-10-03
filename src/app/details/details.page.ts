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
  services:any;
  recent:any;
  vrespo: Object;
  sid: any;
  repstatus: Object;
  reporttxt: any;
  constructor(
    public actionsheetCtrl:ActionSheetController,
    public alertCtrl:AlertController,
    private storage:Storage,
    private http:HttpClient,
    private router: Router,
    private alertController:AlertController
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
      console.log("BID",this.business_id);
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

      this.http.get(AppComponent.ApiUrl+"viewbusiness.php?bid="+this.business_id+"&user_id="+this.user_id).subscribe(vrespo=>{
        this.vrespo = vrespo;
        console.log("View Response:", this.user_id);
      })

      // Get Recent Viewed
this.http.get(AppComponent.ApiUrl + "recentviews.php?user_id="+this.user_id).subscribe(async data => {
  this.recent = data;
 console.log(this.recent);
 })

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
          text: 'Report',  
          handler: () => {   
            this.ReportAlert();
          }  
        }
        //{  
        //   text: 'Hide',  
        //   handler: () => {  
        //    console.log('Archive clicked');  
        //   }  
        // },{  
        //   text: 'Report',  
        //   handler: () => {  
        //    console.log('Archive clicked');  
        //   }  
        // },{  
        //   text: 'Rating',  
        //   handler: () => {  
        //    console.log('Archive clicked');  
        //   }  
        // }  
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
  this.http.get(AppComponent.ApiUrl+"product_view.php?pid="+this.products[i].id+"&user_id="+this.user_id).subscribe(vrespo=>{
    this.vrespo = vrespo;
    console.log("View Response:", this.vrespo);
  })
  this.router.navigate(['item']);
  this.storage.set("bname", this.name);
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

shareservice(i){
  this.sid= this.services[i].id;
  this.http.get(AppComponent.ApiUrl+"shareservice.php?user_id="+this.user_id+"&sid="+this.sid).subscribe(shares =>{
    if(shares =1){
      alert("Service Shared Sucesfully");
    }
  })
}
cmtservice(i){
  this.sid= this.services[i].id;
  this.http.get(AppComponent.ApiUrl+"cmtservice.php?user_id="+this.user_id+"&sid="+this.sid).subscribe(shares =>{
    if(shares =1){
      alert("Service Commented Sucesfully");
    }
  })
}

likeservice(i){
  this.sid= this.services[i].id;
  this.http.get(AppComponent.ApiUrl+"likeservice.php?user_id="+this.user_id+"&sid="+this.sid).subscribe(shares =>{
    if(shares =1){
      alert("Service Liked Sucesfully");
    }
  })
}

favservice(i){
  this.sid= this.services[i].id;
  this.http.get(AppComponent.ApiUrl+"favservice.php?user_id="+this.user_id+"&sid="+this.sid).subscribe(shares =>{
    if(shares =1){
      alert("Service Favourite Sucesfully");
    }
  })
}

shophere(){
  this.storage.set("bid", this.business_id);
  this.router.navigate(['shophere']);
}

recdetails(i) {
  console.log(this.recent[i].id);
  this.storage.set("bid",this.recent[i].id);
  this.router.navigateByUrl('/details');
  window.location.reload()
}

// async presentPrompt() {
//   let alert = this.alertCtrl.create({
    
//     inputs: [
//       {
//         name: 'username',
//         placeholder: 'Username'
//       },
//       {
//         name: 'password',
//         placeholder: 'Password',
//         type: 'password'
//       }
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: data => {
//           console.log('Cancel clicked');
//         }
//       },
//       {
//         text: 'Login',
//         handler: data => {
//           if ("kalyan") {
//             // logged in!
//           } else {
//             // invalid login
//             return false;
//           }
//         }
//       }
//     ]
//   });
//   await alert.present();
// }


async ReportAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Report Business',
    inputs: [
      {
        name: 'reporttext',
        type: 'textarea',
        id:'reporttxt',
        placeholder: ''
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Report',
        handler: data => {
          this.reporttxt = data.reporttext,
          console.log("Report Text", this.reporttxt);
          console.log('Confirm Ok');
          this.rptbusiness();
        }
      }
    ]
  });

  await alert.present();
}

rptbusiness(){
  this.http.get(AppComponent.ApiUrl +"report_business.php?uid="+this.user_id+"&bid="+this.business_id+"&report="+this.reporttxt).subscribe(response =>{
    this.repstatus = response;
    console.log(this.repstatus);
    if(this.repstatus == 1){
     alert("Business Rported Sucefully");
    }
    else {
      alert("Failed to report BUsiness");
    }
})
}

}


