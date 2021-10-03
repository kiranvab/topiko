import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-business-views',
  templateUrl: './business-views.page.html',
  styleUrls: ['./business-views.page.scss'],
})
export class BusinessViewsPage implements OnInit {
bid:any;
vtype:any;
views:any;
count: any;
resdata:any = true;


  constructor(
    private storage:Storage,
    private http:HttpClient,
    public toastController: ToastController
  ) {
    this.vtype = "views";
   }

  ngOnInit() {
    this.storage.get("bid").then(val =>{
      this.bid = val;
      console.log("Business Id", this.bid);
      this.http.get(AppComponent.ApiUrl+"getbviewusers.php?bid="+this.bid+"&table=business_"+this.vtype).subscribe(viewData =>{
        this.views = viewData;
      })
    })
  }

  checkValue(event){
    console.log("value", this.vtype);
    this.http.get(AppComponent.ApiUrl+"getbviewusers.php?bid="+this.bid+"&table=business_"+this.vtype).subscribe(viewData =>
      {
        this.count = viewData
        if(this.count.length > 0){
        this.resdata = true;
        this.views = viewData;
      }
      else{
        this.views = "0";
        this.resdata = false;
        this.presentToast();
      }
        console.log("View Count", this.views);
      })

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No '+this.vtype,
      duration: 2000,
      color: 'secondary',
      position: "middle"
    });
    toast.present();
  }

}
