import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.page.html',
  styleUrls: ['./my-business.page.scss'],
})
export class MyBusinessPage implements OnInit {
  udata: any;
  uid:any;
  mybusiness: any;
  bdetails:any;
  bid:any;
  viewedcnt:any;
  favouritecnt:any;
  likescnt: any;
  reviewcnt:any;

  constructor(
    public actionsheetCtrl:ActionSheetController,
    private route:Router,
    private storage:Storage,
    private http:HttpClient,
    private router:ActivatedRoute,
    private toastController: ToastController
   
  ) { }

  ngOnInit() {
    this.router.params.subscribe(val=>{
    this.storage.get("userdetails").then(val =>
      {
        this.udata = val;
        console.log("USer Data", this.udata);
        this.uid = this.udata[0].id;
        this.http.get(AppComponent.ApiUrl+"mybusiness.php?user_id="+this.uid).subscribe(data =>
        {
          this.mybusiness = data;
          this.storage.set("mybusiness", this.mybusiness);
          
          this.bid = this.mybusiness[0].id;
          console.log("MyBusiness ID", this.bid);
          this.http.get(AppComponent.ApiUrl+"getviewcount.php?bid="+this.bid).subscribe(viewData =>
            {
              this.viewedcnt = viewData;
              console.log("View Count", this.viewedcnt)
            })

          this.http.get(AppComponent.ApiUrl+"getfavcount.php?bid="+this.bid).subscribe(viewData =>
            {
              this.favouritecnt = viewData;
              console.log("Favoutire Count", this.favouritecnt);
            })

            this.http.get(AppComponent.ApiUrl+"getlikescount.php?bid="+this.bid).subscribe(likeData =>
              {
                this.likescnt = likeData;
                console.log("Likes Count", this.likescnt);
              })

              this.http.get(AppComponent.ApiUrl+"getreviewcount.php?bid="+this.bid).subscribe(revData =>
                {
                  this.reviewcnt = revData;
                  console.log("Review Count", this.reviewcnt);
                })

        })
      })
    });
  }

  checkbusiness(){
    console.log("Business Exist;");
    this.http.get(AppComponent.ApiUrl+"checkbcount.php?user_id="+this.uid).subscribe(response =>{
      console.log("Business Count", response);
      if(response == 1){
        this.presentToast();
      }
      else{
        this.route.navigate(['create-business']);
      }
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Free User Can Add Only 1 business',
      duration: 2000,
      color: 'secondary',
      position: "middle"
    });
    toast.present();
  }

  async openMenu() {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
        //   text: 'Plans',  
        //   handler: () => {  
        //     this.route.navigate(['plans']);
        //     console.log('Destructive clicked');  
        //   }  
        // },{  
        //   text: 'Verification',  
        //   handler: () => {  
        //     this.route.navigate(['verification'])
        //     console.log('Archive clicked');  
        //   }  
        // },  {  
          text: 'Show Case',   
          handler: () => {  
            console.log('Cancel clicked');  
            this.route.navigate(['/showcase'])
          },  
        }
        // {  
        //   text: 'Promotion',  
        //   handler: () => {  
        //     console.log('Promotions clicked');  
        //   },  
        // }    
      ]  
    });  
    await actionSheet.present();  
  }  
  details(i){
    this.http.get(AppComponent.ApiUrl+"business_details.php?id="+this.mybusiness[i].id).subscribe(bdata =>
      {
        this.bdetails = bdata;
        console.log(this.bdetails);
      
    let navigationExtras: NavigationExtras = {
      queryParams: {
        businessdata: JSON.stringify(this.bdetails)
      }
    };
    this.route.navigate(['business-details'], navigationExtras);
  })
    
    
  }

  views(){
    this.storage.set("bid", this.bid);
    this.route.navigate(['business-views']);
  }
}
