import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-reach-view',
  templateUrl: './qr-reach-view.page.html',
  styleUrls: ['./qr-reach-view.page.scss'],
})
export class QrReachViewPage implements OnInit {

  rand: any;

  constructor() { }

  ngOnInit() {
    this.rand = Math.floor(Math.random() * 100000) + 100000;
    console.log(this.rand);
  }

}
