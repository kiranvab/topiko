import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.page.html',
  styleUrls: ['./edit-branch.page.scss'],
})
export class EditBranchPage implements OnInit {
  brid: any;
  branch: any;
  branch_title:any
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
    private http:HttpClient,
    private router:Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    this.storage.get("brid").then(val =>{
      this.brid = val;
      this.http.get(AppComponent.ApiUrl+"getbranch.php?brid="+this.brid).subscribe(response =>{
        this.branch = response;
        this.branch_title = this.branch[0].branch_title;
        this.branch_address = this.branch[0].branch_address;
        this.branch_head = this.branch[0].branch_head;
        this.contact_number = this.branch[0].contact_number;
        this.contact_email = this.branch[0].contact_email;
        this.alternate_number = this.branch[0].alternate_number;
        this.branch_area = this.branch[0].branch_area;
        this.branch_pincode = this.branch[0].branch_pincode;
        this.branch_city = this.branch[0].branch_city;
        this.branch_state = this.branch[0].branch_state;
        this.branch_country = this.branch[0].branch_country;
        console.log("Branch Details", this.branch);
      })
    })
  }

  submit(){
    var link = AppComponent.ApiUrl+"update_branch.php";
    var mydata = JSON.stringify({
      "branch_id" : this.brid,
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
      message: 'Branch has been Updated sucesfully.',
      buttons: ['OK'],
      
    });
      this.router.navigate(["/branches"]);
    await alert.present();
  }

  async Failed(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Failed!',
      message: 'Failed to Update branch try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
