import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  pid: any;
  product: any;
  producttitle: any;
  producttags: void;
  measuringtype: void;
  measuringdetails: void;
  description: void;
  actualprice: void;
  discount_price: void;
  update: Object;

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
            console.log(this.product);

          })
      })
  }

  submit(){
    var link = AppComponent.ApiUrl+"updateproduct.php";
    var myData = JSON.stringify({
      'pid' : this.pid,
      'producttitle' : this.producttitle,
      'producttags' : this.producttags,
      'measuringtype' : this.measuringtype,
      'measuringdetails' : this.measuringdetails,
      'description' : this.description,
      'actualprice' : this.actualprice,
      'discount_price' : this.discount_price
    });
    console.log(myData);
    this.http.post(link,myData).subscribe(data =>{
      this.update = data;
      console.log(this.update);
      if(this.update == 1){
        //alert("Product Updated Sucesfully");
        this.router.navigate(['product']);
      
      }
    })
  }

}
