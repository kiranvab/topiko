import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.page.html',
  styleUrls: ['./relogin.page.scss'],
})
export class ReloginPage implements OnInit {
mobile:any;
mpin:any;
udata:any;
  constructor(
    private http:HttpClient,
    private storage:Storage,
    private router:Router,
    public events: EventsService,
    private menuCtrl : MenuController
  ) {
    //this.menuCtrl.enable(false);
   }

  ngOnInit() {
    this.storage.remove('userdetails');
  }

  login(){
    console.log(this.mobile);
    console.log(this.mpin);
    this.http.get(AppComponent.ApiUrl+"login.php?mobile="+this.mobile+"&password="+this.mpin).subscribe(data =>{
      console.log(data);
      if(data == 0){
        alert("Invalid Logins");
      }
      else {
      this.udata = data;
      this.events.publishSomeData({
        userdetails: this.udata
      })
      this.storage.set("userdetails",this.udata);
      this.router.navigate(['home']);
    }
    })
  }
}
