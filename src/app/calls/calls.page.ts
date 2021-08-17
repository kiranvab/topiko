import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  segmentModel:string;
  contacts: any;
  userDetails: any;
  user_id: any;
  chresponse: Object;
  chatroom: any;
  prtner_id: any;

  constructor(
    private storage: Storage,
    private http:HttpClient,
    private route:Router
  ) {

    this.segmentModel = "calls";
   }

  ngOnInit() {
    this.http.get(AppComponent.ApiUrl+"getcontacts.php").subscribe((response)=>{
      this.contacts= response
      console.log("Contacts:", this.contacts);
    });
    this.storage.get('userdetails').then((udetails)=>{
      this.userDetails = udetails;
      console.log("UserDetails:", this.userDetails)
      this.user_id = this.userDetails[0].id;
      console.log(this.user_id,'User ID')
    })
  }

  chat(i){
   this.prtner_id = this.contacts[i].id;
   console.log("partner_id", this.prtner_id)
    this.http.get(AppComponent.ApiUrl+"createchtroom.php?user_id="+this.user_id+"&partner_id="+this.contacts[i].id).subscribe((chatdata)=>{
      this.chresponse = chatdata;
      console.log("chatroom Data", this.chresponse)
      this.chatroom = this.chresponse[0].chatroom;
      this.storage.set("chatroom", this.chatroom);
      this.storage.set("chatname", this.contacts[i].name);
      console.log("chatroom",this.chatroom);
    });
    this.route.navigate(['chatbox']);
  }

}