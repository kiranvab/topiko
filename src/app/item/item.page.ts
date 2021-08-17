import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  product_id: any;
  pdtails: any;

  constructor(
    private storage :Storage,
    private route: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("prid").then((pval)=>{
      this.product_id= pval;

      this.http.get(AppComponent.ApiUrl+"getproduct_details.php?prid="+this.product_id).subscribe((response)=>{
        this.pdtails = response;
        console.log('Prdouct details', this.pdtails);
      })
    })
  }

  Callcc(){
    this.route.navigate(['connect']);
  }

}
