import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.page.html',
  styleUrls: ['./shop-categories.page.scss'],
})
export class ShopCategoriesPage implements OnInit {
  categories:any;
  constructor(
    private http:HttpClient,
    private storage:Storage,
    private router:Router
  ) { }

  ngOnInit() {
    this.http.get(AppComponent.ApiUrl + "getcategories.php").subscribe(async data => {
      this.categories = data;
      console.log(this.categories);
  })
  }

  details(i){
    console.log(this.categories[i].type);
    this.storage.set("type", this.categories[i].type)
    this.router.navigate(['gcategory']);
  }

}
