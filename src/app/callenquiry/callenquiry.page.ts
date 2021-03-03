import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callenquiry',
  templateUrl: './callenquiry.page.html',
  styleUrls: ['./callenquiry.page.scss'],
})
export class CallenquiryPage implements OnInit {
  segmentModel:string;
  constructor() { 
    this.segmentModel = "all"
  }

  ngOnInit() {
  }

}
