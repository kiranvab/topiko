import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-chats-contact',
  templateUrl: './chats-contact.page.html',
  styleUrls: ['./chats-contact.page.scss'],
})
export class ChatsContactPage implements OnInit {
  userDetails: any;
  user_id: any;
  contacts: any;
  cntlength: any;
  prtner_id: any;
  chresponse: Object;
  chatroom: any;
  chats: any;
  name: any;
  onine: any;
  lastseen: any;

  constructor(
    private storage : Storage,
    private router : ActivatedRoute,
    private http : HttpClient,
    private route : Router,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.router.params.subscribe(val=>{
      this.storage.get('userdetails').then((udetails)=>{
    this.userDetails = udetails
    this.user_id = this.userDetails[0].id;
    console.log(this.user_id,'User ID');
    this.http.get(AppComponent.ApiUrl+"getcontacts.php?user_id="+this.user_id).subscribe(Response =>
      {
        this.contacts = Response;
        this.cntlength = this.contacts.length;
        console.log("contacts",Response);
      });
  });
});
}
chat(i){
  this.prtner_id = this.contacts[i].id;
  console.log("partner_id", this.prtner_id)
   this.http.get(AppComponent.ApiUrl+"createchtroom.php?user_id="+this.user_id+"&partner_id="+this.prtner_id).subscribe((chatdata)=>{
     this.chresponse = chatdata;
     console.log("Chat Response", this.chresponse)
     if(this.chresponse!=0){
        this.chatroom = this.chresponse[0].chatroom;
      this.name = this.contacts[i].name;
      this.onine = this.contacts[i].online_status;
      this.lastseen = this.contacts[i].last_seen;
      this.http.get(AppComponent.ApiUrl+"chatmsg_statusupdate.php?chatroom="+this.chatroom).subscribe((cdata)=>{
        console.log(cdata);
      })
      console.log("chatroom",this.chatroom);
      let navigationExtras: NavigationExtras = {
        queryParams: {
            room : this.chatroom,
            name : this.name,
            onine : this.onine,
            last_seen: this.lastseen
        }
    };
    this.navCtrl.navigateForward(['/chatbox'],navigationExtras);
    }
  });
}
}
