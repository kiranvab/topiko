import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.page.html',
  styleUrls: ['./producttype.page.scss'],
})
export class ProducttypePage implements OnInit {
  catalog:any = false;
  constructor() { }

  showcatalog(){
    if(this.catalog == true){ 
    this.catalog = false;
  }
  else{
    this.catalog = true;
  }
  }

  close(){
    this.catalog = false;
  }

  ngOnInit() {
  }

}
