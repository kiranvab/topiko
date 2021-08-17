import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.page.html',
  styleUrls: ['./mycard.page.scss'],
})
export class MycardPage implements OnInit {
  carddetails: any;
  name: any;
  mobile: any;
  card: any;
  carddata: any;
  hdiv:any = false;
  vdiv:any = true;
  userdetails: any;
  uid: any;
  ucarddata: Object;

  constructor(
    private route : ActivatedRoute, 
    private http:HttpClient,
    private router:Router,
    private storage:Storage
  ) { }


  rotate(){
    console.log("Rotate");
    if(this.hdiv == true){ 
      this.hdiv = false;
      this.vdiv = true;
    }
    else{
      this.hdiv = true;
      this.vdiv = false;
    }
  }

  

  ngOnInit() {
    this.storage.get("userdetails").then(val => {
      this.userdetails=val;
      this.uid = this.userdetails[0].id;
      this.http.get(AppComponent.ApiUrl+"getcarddetails.php?user_id="+this.uid).subscribe(data =>
        {
          this.carddata = data;
          console.log("resp", this.carddata);
          if(this.carddata = ''){
            this.router.navigate(['/createdvc']);
          }
          else{
            this.ucarddata = data;
            this.name = this.ucarddata[0].name;
            this.mobile = this.ucarddata[0].mobile;
        }
        })
    })

  }


  morecards()
  {
    this.http.get(AppComponent.ApiUrl+"getcarddetails.php?user_id="+this.card).subscribe(data =>
      {
        console.log(data);
        this.carddata = data;
        this.name = this.carddata[0].name;
        this.mobile = this.carddata[0].mobile;

        let navigationExtras: NavigationExtras = {
          queryParams: {
            card: JSON.stringify(this.carddata)
          }
        };
        this.router.navigate(['morevcards'], navigationExtras);
      })
  }

}
