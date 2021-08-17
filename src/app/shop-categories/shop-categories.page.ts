import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.page.html',
  styleUrls: ['./shop-categories.page.scss'],
})
export class ShopCategoriesPage implements OnInit {
  categories:any;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get(AppComponent.ApiUrl + "getcategories.php").subscribe(async data => {
      this.categories = data;
      console.log(this.categories);
  })
  }

}
