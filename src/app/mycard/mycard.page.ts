import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';

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
    private storage:Storage,
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
    this.route.params.subscribe(val=>{
    this.storage.get("userdetails").then(val => {
      this.userdetails=val;
      this.uid = this.userdetails[0].id;
      let car =this;
      setTimeout(() => {
        car.loadcard();
      }, 2000);
    })
  });
  }

loadcard(){
  this.http.get(AppComponent.ApiUrl+"getcarddetails.php?user_id="+this.uid).subscribe(data =>
    {
      this.carddata = data;
      console.log("Mycard Data", this.carddata)
      if(this.carddata == null){
        this.router.navigate(['/createdvc']);
      }
      else{
        this.carddata = data;
        console.log(this.ucarddata);
    }
    })
}
   morecards()
   {
    this.http.get(AppComponent.ApiUrl+"getcarddetails.php?user_id="+this.uid).subscribe(data =>
      {
        console.log(data);
        this.carddata = data;
        //this.router.navigate(['morevcards']);
      })
  }

}
