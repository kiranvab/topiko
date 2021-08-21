import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-mpin',
  templateUrl: './mpin.page.html',
  styleUrls: ['./mpin.page.scss'],
})
export class MpinPage implements OnInit {
udata:any;
mobile:any;
mpin1:any;
mpin2:any;
mpin3:any;
mpin4:any;
cmpin1:any;
cmpin2:any;
cmpin3:any;
cmpin4:any;
cmpin:any;
mpinstatus:any;

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient,
    private router: Router,
    private storage:Storage,
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if (params && params.user) {
        this.udata = JSON.parse(params.user);
        this.mobile = this.udata[0].mobile;
        console.log(this.mobile);
        this.storage.set("userdetails", this.udata);
        console.log(this.udata);
      }
    })
  }

  gotoNextField(nextElement){
    nextElement.setFocus();
    this.check();
  }


  check(){
    if(this.mpin1&&this.mpin2&&this.mpin3&&this.mpin4&&this.cmpin&&this.cmpin2&&this.cmpin3&&this.cmpin4){
      this.setmpin();
    }
  }

  setmpin(){
    let mpin = this.mpin1 +""+this.mpin2+""+this.mpin3+""+this.mpin4;
    let cmpin = this.cmpin1 +""+this.cmpin2+""+this.cmpin3+""+this.cmpin4;
    console.log(mpin);
    console.log(cmpin);
    if(mpin != cmpin){
      alert("MPIN and Confirm MPIN should be Same");
    }

    let mobile = this.mobile;
    console.log(mobile);
    this.http.get(AppComponent.ApiUrl+"createpassword.php?mobile="+mobile+"&mpin="+mpin).subscribe(mpin =>{
      this.mpinstatus = mpin;
      console.log(this.mpinstatus);
      if(this.mpinstatus == 1){
       this.router.navigate(['digitalcard']);
      }
      else{
        alert("Invalid OTP");
      }
    });
  }
  
}