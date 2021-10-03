import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  countries:any;
  buid: any;
  services: any;
  constructor(
    private http : HttpClient ,
    public actionsheetCtrl:ActionSheetController,
    public router:Router,
    private storage:Storage,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log("Business ID", this.buid);
        this.http.get(AppComponent.ApiUrl+"getoffered_services.php?bid="+this.buid).subscribe(data=>
          {
            this.services = data;
            console.log("Services", this.services);
          }
          );
      })
      this.getservices();
  }

  getservices(){
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log("Business ID", this.buid);
        this.http.get(AppComponent.ApiUrl+"getoffered_services.php?bid="+this.buid).subscribe(data=>
          {
            this.services = data;
            console.log("Services", this.services);
          }
          );
      })
  }

  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
            this.services[i].id;
            console.log(this.services[i].id)
            this.storage.set("sid", this.services[i].id);
            this.router.navigate(['/edit-service'])
          }  
        },{  
          text: 'Delete',  
          handler: () => {  
           console.log('Archive clicked'); 
           this.presentAlertConfirm(i); 
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  } 

  async presentAlertConfirm(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you Sure do you want to <strong>Delete</strong>Service ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            console.log(this.services[i].id);
            this.http.get(AppComponent.ApiUrl+"deleteservice.php?sid="+this.services[i].id).subscribe(data =>{
              console.log("Response", data);
              this.AlertDelete()
              this.getservices();
              window.location.reload();
            })
          }
        }
      ]
    });

    await alert.present();
  }

    async AlertDelete(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Deleted!',
        message: 'Service has been deleted sucesfully.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
