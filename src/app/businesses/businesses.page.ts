import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.page.html',
  styleUrls: ['./businesses.page.scss'],
})
export class BusinessesPage implements OnInit {
catid:any;
serid:any;
business:any;
  constructor(
    private storage:Storage,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("cid").then(val =>{
      this.catid = val;
      console.log("Category", this.catid)
      this.http.get(AppComponent.ApiUrl+"getbusinessbycategory.php?cid="+this.catid).subscribe(data =>
        {
          this.business = data;
          console.log("Category", this.business);
        })
      })
  }


}
