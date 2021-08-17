import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.page.html',
  styleUrls: ['./business-profile.page.scss'],
})
export class BusinessProfilePage implements OnInit {
  bid: any;
  bpin: any;
  constructor() { }

  ngOnInit() {
    this.bid = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.bid);
    this.bpin = Math.floor(Math.random() * 1000) + 1000;
    console.log(this.bpin);
  }

}
