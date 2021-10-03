import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  product_id: any;
  pdtails: any;
  user_id: any;
  udata: any;
  bname: any;
  recent:any;
  vrespo: Object;

  constructor(
    private storage :Storage,
    private router: Router,
    private http: HttpClient,

  ) { }

  ngOnInit() {

    this.storage.get("bname").then(name =>
      {
        this.bname= name;
      })

    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id
      })

    // Get Recent Viewed
this.http.get(AppComponent.ApiUrl + "recentviews.php?user_id="+this.user_id).subscribe(async data => {
  this.recent = data;
 console.log(this.recent);
 })

    this.storage.get("prid").then((pval)=>{
      this.product_id= pval;

      this.http.get(AppComponent.ApiUrl+"getproduct_details.php?prid="+this.product_id).subscribe((response)=>{
        this.pdtails = response;
        console.log('Prdouct details', this.pdtails);
      })
    })
  }


  

  share(){
    this.http.get(AppComponent.ApiUrl+"product_share.php?pid="+this.product_id+"&user_id="+this.user_id).subscribe(shareres =>{
      console.log(shareres);
    })
  }

  like(){
    this.http.get(AppComponent.ApiUrl+"product_like.php?pid="+this.product_id+"&user_id="+this.user_id).subscribe(likeres =>{
      console.log(likeres);
    })
  }

  fav(){
    this.http.get(AppComponent.ApiUrl+"product_fav.php?pid="+this.product_id+"&user_id="+this.user_id).subscribe(favres =>{
      console.log(favres);
    })
  }

  comment(){
    this.http.get(AppComponent.ApiUrl+"product_comment.php?pid="+this.product_id+"&user_id="+this.user_id).subscribe(commentres =>{
      console.log(commentres);
    })
  }

  Callcc(){
    this.router.navigate(['connect']);
  }


  details(i) {
    //console.log(this.recent[i].id);
    this.storage.set("bid",this.recent[i].id);
    this.router.navigate(['/details']);
  }


}
