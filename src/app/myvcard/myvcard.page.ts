import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-myvcard',
  templateUrl: './myvcard.page.html',
  styleUrls: ['./myvcard.page.scss'],
})
export class MyvcardPage implements OnInit {
  carddetails:any;
  name: any;
  mobile:any;

  constructor(
    private route:ActivatedRoute,
    private router:Route,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if (params && params.user) {
        this.carddetails = JSON.parse(params.user);
        this.name = this.carddetails[0].name;
        this.mobile = this.carddetails[0].mobile;
        console.log(this.carddetails);
      }
    })
  }

}
