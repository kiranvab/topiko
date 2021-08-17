import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-morevcards',
  templateUrl: './morevcards.page.html',
  styleUrls: ['./morevcards.page.scss'],
})
export class MorevcardsPage implements OnInit {
card:any;
  carddata: Object;
  name: any;
  mobile: any;
  uid: any;
  hdiv:any = false;
  vdiv:any = true;

  constructor(
    private router :Router,
    private route : ActivatedRoute,
    public http: HttpClient
  ) { }

  rotate(){
    console.log("Rotate");
    if(this.hdiv == true){ 
      this.hdiv = false;
      this.vdiv = true;
    }
    else{
      this.hdiv = true;
      this.vdiv = false;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if (params && params.card) {
        this.card = JSON.parse(params.card);
        console.log(this.card[0].user_id);
        this.uid = this.card[0].user_id;
        this.http.get(AppComponent.ApiUrl+"getcarddetails.php?user_id="+this.uid).subscribe(data =>
          {
            console.log(data);
            this.carddata = data;
            // this.name = this.carddata[0].name;
            // this.mobile = this.carddata[0].mobile;
          })
      }
    })
  }

}
