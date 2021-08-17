import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
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

  constructor(
    public actionsheetCtrl:ActionSheetController,
    private route:Router,
    private storage:Storage,
    private http:HttpClient,
    private router:ActivatedRoute
   
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
          console.log("MyBusiness", this.mybusiness);
        })
      })
    });
  }

  async openMenu() {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Plans',  
          handler: () => {  
            this.route.navigate(['plans']);
            console.log('Destructive clicked');  
          }  
        },{  
          text: 'Verification',  
          handler: () => {  
            this.route.navigate(['verification'])
            console.log('Archive clicked');  
          }  
        }, {  
          text: 'Show Case',   
          handler: () => {  
            console.log('Cancel clicked');  
            this.route.navigate(['/showcase'])
          },  
        },
        {  
          text: 'Promotion',  
          handler: () => {  
            console.log('Promotions clicked');  
          },  
        }    
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
}
