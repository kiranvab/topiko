import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-qrreach',
  templateUrl: './qrreach.page.html',
  styleUrls: ['./qrreach.page.scss'],
})
export class QrreachPage implements OnInit {
udata:any;
user_id:any;
myqr:any;
uimage:any;
delres:any;
  constructor(
    private storage:Storage,
    private router:Router,
    private http:HttpClient,
    private actionsheetCtrl:ActionSheetController
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>
      {
        this.udata= val;
        this.user_id = this.udata[0].id;
        this.uimage = this.udata[0].image;
        console.log("UserID", this.user_id);
        this.http.get(AppComponent.ApiUrl+"myqrreach.php?uid="+this.user_id).subscribe(qrdata =>
          {
          this.myqr = qrdata;
          console.log(this.myqr);
        })
      })

  }


  qrdetails(i)
  {
    console.log(i);
    this.storage.set("qrid", this.myqr[i].id);
    this.router.navigate(['qr-reach-view']);
  }



  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
            this.storage.set("qrid",this.myqr[i].id);
           this.router.navigate(['edit-qr-reach']);
          }  
        },  
        {  
          text: 'Delete',  
          handler: () => {  
            console.log('Destructive clicked');  
            this.http.get(AppComponent.ApiUrl+"deleteqr.php?qrid="+this.myqr[i].id).subscribe(response =>{
              this.delres = response;
              if(this.delres = 1){
                alert("Qr Reach Deleted Sucesfully");
                window.location.reload();
                this.router.navigate(['qrreach']);

              }
              else {
                alert("Failed to Delete QR Reach");
              }
            })
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  }

}


