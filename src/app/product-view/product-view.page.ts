import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  pid: any;
  product: Object;
  producttitle: any;
  producttags: any;
  measuringtype: any;
  measuringdetails: any;
  description: any;
  actualprice: any;
  discount_price: any;
  pro_image: any;
  banner: any;
  video: any;
  img1: any;
  img2: any;
  img3: any;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("pid").then(val =>
      {
        this.pid = val;
        console.log("product id", this.pid);
        this.http.get(AppComponent.ApiUrl+"getproduct_details.php?prid="+this.pid).subscribe(data =>
          {
            this.product= data;
            this.producttitle = this.product[0].title;
            this.producttags = this.product[0].tag;
            this.measuringtype =  this.product[0].meassuring_type;
            this.measuringdetails =  this.product[0].meassuring_details;
            this.description =  this.product[0].description;
            this.actualprice =  this.product[0].mrp;
            this.discount_price =  this.product[0].discount_price;
            this.pro_image = this.product[0].product_image;
            this.banner = this.product[0].banner;
            this.video = this.product[0].video;
            this.img1 = this.product[0].img1;
            this.img2 = this.product[0].img2;
            this.img3 = this.product[0].img3;
            console.log(this.product);
          })
      })
  }

  edit(){
    this.storage.set('pid', this.pid);
    this.router.navigate(['edit-product']);
  }

}
