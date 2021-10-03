import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  business_id: any;
  employees: any;
  prtner_id: any;
  chresponse: Object;
  chatroom: any;
  udata: any;
  ucity: any;
  user_id: any;
  contacts: any;
  business: Object;
  business_name: any;
  userdata: any;
  patner_mobile: any;
  branches:any;
  branch:any;
  branchusers: Object;
  count: any;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private route:Router,
    private router: ActivatedRoute,
    public toastController: ToastController
  ) { 
    router.params.subscribe(val=>{})
  }

  ngOnInit() {
    this.router.params.subscribe(val=>{
      this.storage.get("bid").then(bval=>{
        this.business_id = bval;

        // this.http.get(AppComponent.ApiUrl+"getemployees.php?bid="+this.business_id).subscribe(response=>{
        //   this.employees = response;
        //   console.log("employees:", this.employees);
        // });
        this.http.get(AppComponent.ApiUrl+"getbusinessdetails.php?bid="+this.business_id).subscribe(bdtails=>{
          this.business = bdtails;
          console.log("business Dtails:", this.business);
          this.business_name = this.business[0].business_name;
          console.log("business Name:", this.business_name)
      })
      this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.business_id).subscribe(branch=>{
        this.branches = branch;
        console.log("business Branches:", this.branches)
    })
    });

    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.ucity = this.udata[0].city;
        this.user_id = this.udata[0].id;
        console.log(this.ucity);
      });

    });
  }

  chat(i){
    this.prtner_id = this.employees[i].user_id;
    console.log("partner_id", this.prtner_id)
     this.http.get(AppComponent.ApiUrl+"businesschatroom.php?user_id="+this.user_id+"&partner_id="+this.prtner_id+"&bid="+this.business_id).subscribe((chatdata)=>{
       this.chresponse = chatdata;
       console.log("chatroom Data", this.chresponse)
       this.chatroom = this.chresponse[0].chatroom;
       this.storage.set("chatroom", this.chatroom);
       this.storage.set("chatname", this.business_name);
       console.log("chatroom",this.chatroom);
     });
     this.route.navigate(['chatbox']);
   }

   video(i){
     this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
       this.userdata=udata;
       this.patner_mobile= this.userdata[0].mobile;
       console.log("partner_mobile:", this.patner_mobile);
       this.storage.set("partnerId", this.patner_mobile);
       this.route.navigate(['/videocall']);
     })
   }

   audio(i){
    this.http.get(AppComponent.ApiUrl+"userdetails.php?user_id="+this.employees[i].user_id).subscribe(udata=>{
      this.userdata=udata;
      this.patner_mobile= this.userdata[0].mobile;
      console.log("partner_mobile:", this.patner_mobile);
      this.storage.set("partnerId", this.patner_mobile);
      this.route.navigate(['/calling']);
    })
  }

  branchemp(event){
    console.log("Branch ID", this.branch);
    this.http.get(AppComponent.ApiUrl+"getbranchemp.php?brid="+this.branch).subscribe(udata=>{
    
      this.count = udata
      if(this.count.length > 0){
        this.employees=udata
        console.log(this.employees);
    }
    else{
      this.presentToast();
    }
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No Employees in this Branch',
      duration: 5000,
      color: 'secondary',
      position: "bottom"
    });
    toast.present();
  }

}
