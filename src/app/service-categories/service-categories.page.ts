import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.page.html',
  styleUrls: ['./service-categories.page.scss'],
})
export class ServiceCategoriesPage implements OnInit {
services:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get(AppComponent.ApiUrl + "getservices.php").subscribe(async data => {
      this.services = data;
      console.log(this.services);
  })
  }

}
