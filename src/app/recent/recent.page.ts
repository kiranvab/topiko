import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.page.html',
  styleUrls: ['./recent.page.scss'],
})
export class RecentPage implements OnInit {
recent:any;
  udata: any;
  user_id: any;
  constructor(
    private http:HttpClient,
    private storage:Storage,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
//Get Recent Viewed
this.http.get(AppComponent.ApiUrl + "recentviews.php?user_id="+this.user_id).subscribe(async data => {
  this.recent = data;
 console.log(this.recent);
 })
})
  }

  details(i) {
    //console.log(this.recent[i].id);
    this.storage.set("bid",this.recent[i].id);
    this.router.navigate(['details']);
  }

}
