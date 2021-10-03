import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.page.html',
  styleUrls: ['./business-profile.page.scss'],
})
export class BusinessProfilePage implements OnInit {
  bid: any;
  business:any
  constructor(
    private storage:Storage,
    private http: HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val =>{
      this.bid=val;
      console.log("Business ID", this.bid);
      this.http.get(AppComponent.ApiUrl+"businessprofile.php?bid="+this.bid).subscribe(data =>
        {
          this.business = data;
          console.log("Business", this.business)
    })
    })
  }

  edit(){
    this.storage.set("bid", this.bid);
    this.router.navigate(['edit-business']);
  }
}
