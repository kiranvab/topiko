import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.page.html',
  styleUrls: ['./featured.page.scss'],
})
export class FeaturedPage implements OnInit {
featured:any;
  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit() {
// Get Featured
this.http.get(AppComponent.ApiUrl + "featured.php").subscribe(async data => {
  this.featured = data;
  console.log("Featured", this.featured);
})
  }

}
