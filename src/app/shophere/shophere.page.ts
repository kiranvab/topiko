import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-shophere',
  templateUrl: './shophere.page.html',
  styleUrls: ['./shophere.page.scss'],
})
export class ShopherePage implements OnInit {

  bid:any;
  shopurls:any;

  constructor(
    private storage:Storage,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val =>{
      this.bid = val
      this.http.get(AppComponent.ApiUrl+"getbusinessdetails.php?bid="+this.bid).subscribe((response)=>{
        this.shopurls = response;
        console.log("Shop urls", this.shopurls);
      })
      });
  }

}
