import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-qr-reach',
  templateUrl: './edit-qr-reach.page.html',
  styleUrls: ['./edit-qr-reach.page.scss'],
})
export class EditQrReachPage implements OnInit {

  rand: any;

  constructor() { }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.rand);
  }

}
