import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  segmentModel:string;
  Customer:any = false;
  constructor() {
    this.segmentModel = "details"
   }

    CustClose()
    {
      this.Customer = false;
    }

    CustOpen()
    {
      this.Customer = true;
    }

   
  ngOnInit() {
  }

}
