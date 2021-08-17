import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {
  segmentModel: string;
  bdata: any;
  business_name:any;
  business_id: any;
  buid: any;
  branches: Object;
  constructor(
    public actionsheetCtrl: ActionSheetController,
    public router: Router,
    private route: ActivatedRoute,
    private storage:Storage,
    private http: HttpClient
  ) {
    this.segmentModel = "post";
  }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
        this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe(data =>{
          this.branches = data;
          console.log("Branches", this.branches);
        })
      })
    this.route.queryParams.subscribe(params=>{
      if (params && params.businessdata) {
        this.bdata = JSON.parse(params.businessdata); 
        this.business_name = this.bdata[0].business_name;
        this.business_id = this.bdata[0].id;
        console.log(this.bdata);
        this.storage.set("bid",this.business_id);
      }
    })
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Plans',
          handler: () => {
            this.router.navigate(['plans']);
            console.log('Destructive clicked');
          }
        }, {
          text: 'Verification',
          handler: () => {
            this.router.navigate(['verification'])
            console.log('Archive clicked');
          }
        }, {
          text: 'Show Case',
          handler: () => {
            console.log('Cancel clicked');
            this.router.navigate(['/showcase'])
          },
        },
        {
          text: 'Promotion',
          handler: () => {
            console.log('Promotions clicked');
          },
        },
        {
          text: 'Customize',
          handler: () => {
            console.log('Customize clicked');
          },
        },
        {
          text: 'Setting',
          handler: () => {
            console.log('Setting clicked');
          },
        }
      ]
    });
    await actionSheet.present();
  }

  products(){
    console.log(this.business_id);
    this.router.navigate(['product']);
  }
  offers(){
    this.router.navigate(['offers']);
  }
  services(){
    console.log(this.business_id);
    this.router.navigate(['service']);
  }
  employees(){
    console.log(this.business_id);
    this.router.navigate(['employee']);
  }
  records(){
    console.log(this.business_id);
  }

}
