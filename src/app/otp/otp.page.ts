import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  udata: any;
  mobile: any;
  otp1: any;
  otp2 : any;
  otp3 : any;
  otp4 : any;
  details: Object;
  otpstatus: any;
  userdetails:any;

  constructor(
    private router:Router,
    private route : ActivatedRoute,
    private http : HttpClient,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if (params && params.user) {
        console.log(params);
        this.udata = JSON.parse(params.user);
        this.mobile = this.udata[0].mobile;

      }
    })
  }

  gotoNextField(nextElement){
    nextElement.setFocus();
  }

  check(){
  if(this.otp1&&this.otp2&&this.otp3&&this.otp4){
    this.checkotp();
  }
}

  checkotp(){
    let otp = this.otp1 +""+this.otp2+""+this.otp3+""+this.otp4;
    let mobile = this.mobile;
    this.http.get(AppComponent.ApiUrl+"checkotp.php?mobile="+mobile+"&otp="+otp).subscribe(otp =>{
      this.otpstatus = otp;
      if(this.otpstatus == 0){
        alert("Invalid OTP");
      }
      else{
        let navigationExtras: NavigationExtras = {
          queryParams: {
            user: JSON.stringify(this.udata)
          }
        };
        this.router.navigate(['mpin'], navigationExtras);
      }
    });   
  }


}
