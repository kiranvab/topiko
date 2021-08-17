import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  sid: any;
  service: any;
  servicetitle: any;
  servicetags: any;
  description: any;
  mrp: any;
  discount: any;
  update: Object;

  constructor(
    private storage:Storage,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("sid").then(val =>{
      this.sid = val;
      console.log(this.sid);
      console.log("getservice_details.php?sid="+this.sid);
      this.http.get(AppComponent.ApiUrl+"getservice_details.php?sid="+this.sid).subscribe(data =>
        {
          this.service = data;
          console.log(this.service);
           this.servicetitle = this.service[0].service_title; 
           this.servicetags = this.service[0].service_tag;
           this.description = this.service[0].description;
           this.mrp = this.service[0].mrp;
           this.discount = this.service[0].discount_price
        })
    })
  }

  submit()
  {
    console.log("Submit Clicked");
    var link = AppComponent.ApiUrl+"updateservice.php";
    var myData = JSON.stringify(
      {
        'sid': this.sid,
        'servicetitle' : this.servicetitle,
        'description': this.description,
        'actualprice': this.mrp,
        'discount': this.discount
      }
    );
    this.http.post(link,myData).subscribe(data =>
      {
        this.update = data;
        console.log("update", this.update);
        if (this.update == 1){
          alert("Service Updated Sucesfully");
        }
      }) 
  }
  
  
}
