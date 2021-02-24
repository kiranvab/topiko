import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    speed: 1000,
    slidesPerView: 1.05,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    spaceBetween: 2
  };
  constructor() { }


  ngOnInit() {
  }

}
