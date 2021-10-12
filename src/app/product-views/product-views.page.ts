import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product-views',
  templateUrl: './product-views.page.html',
  styleUrls: ['./product-views.page.scss'],
})
export class ProductViewsPage implements OnInit {
prid:any;
  pdtails: Object;
  constructor(
    private storage:Storage,
    private http:HttpClient
  ) { }

  ngOnInit() {
   
  }

}
