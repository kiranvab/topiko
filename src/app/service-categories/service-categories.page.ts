import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.page.html',
  styleUrls: ['./service-categories.page.scss'],
})
export class ServiceCategoriesPage implements OnInit {
services:any
  constructor(
    private http:HttpClient,
    private storage:Storage,
    private router:Router
  ) { }

  ngOnInit() {
    this.http.get(AppComponent.ApiUrl + "getservices.php").subscribe(async data => {
      this.services = data;
      console.log(this.services);
  })
  }
  details(i){
    console.log(this.services[i].type);
    this.storage.set("type", this.services[i].type)
    this.router.navigate(['gcategory']);
  }

}
