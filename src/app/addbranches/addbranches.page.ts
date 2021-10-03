import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbranches',
  templateUrl: './addbranches.page.html',
  styleUrls: ['./addbranches.page.scss'],
})
export class AddbranchesPage implements OnInit {
  buid: any;
  branch_title:any;
  branch_address: any;
  branch_head: any;
  contact_number: any;
  contact_email: any;
  alternate_number: any;
  branch_area: any;
  branch_pincode: any;
  branch_city: any;
  branch_state: any;
  branch_country: any;
  constructor(
    private storage:Storage,
    private http: HttpClient,
    public alertController: AlertController,
    private router:Router

  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
      })
  }

  submit(){
    var link = AppComponent.ApiUrl+"addbranch.php";
    var mydata = JSON.stringify({
      "business_id" : this.buid,
      "branch_title": this.branch_title,
      "branch_address":	this.branch_address,
      "branch_head": this.branch_head,
      "contact_number": this.contact_number,
      "contact_email": this.contact_email,
      "alternate_number" : this.alternate_number,
      "branch_area" : this.branch_area,
      "branch_pincode" : this.branch_pincode,
      "branch_city" : this.branch_city,
      "branch_state" : this.branch_state,
      "branch_country" : this.branch_country
    })
    console.log("payload", mydata );
    this.http.post(link,mydata).subscribe(data=>{
      console.log(data);
      if(data == 1){
        this.Created();
          this.router.navigate(["/branches"]);        
      }
      else{
        this.Failed();
      }
    })
  }
  async Created(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Created!',
      message: 'Branch has been Created sucesfully.',
      buttons: ['OK'],
      
  });
    await alert.present();
    this.router.navigate(['branches'])   
  }

  async Failed(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Failed!',
      message: 'Failed to create branch try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
