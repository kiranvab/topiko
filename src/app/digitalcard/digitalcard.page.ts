import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-digitalcard',
  templateUrl: './digitalcard.page.html',
  styleUrls: ['./digitalcard.page.scss'],
})
export class DigitalcardPage implements OnInit {
  udata: any;
  uname : any;
  umobile : any;
  userdetails:any;

  constructor(
    private router:Router,
    private storage:Storage
  ) {
  
   }

  ngOnInit() {
    this.storage.get("userdetails").then(val=> {
      this.udata = val;
      console.log(this.udata);
    })
  }

  create(){
   this.router.navigate(['createdvc']);
  }

}
