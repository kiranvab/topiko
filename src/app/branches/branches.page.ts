import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})
export class BranchesPage implements OnInit {
  buid: any;
  branches:any;

  constructor(
    private storage:Storage,
    private http: HttpClient,
    private router:Router,
    private actionsheetCtrl:ActionSheetController,
    public alertController: AlertController,
   
  ) { }

  
  ionViewDidEnter() {
   this.getBranches();
  }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
        this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe(data =>{
          this.branches = data;
          console.log("Branches", this.branches);
        })
      })
      this.getBranches();
  }

  getBranches(){
  this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe(data =>{
    this.branches = data;
    console.log("Branches", this.branches);
  })
}

  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
            this.storage.set("brid",this.branches[i].id);
            console.log("brid",this.branches[i].id);
            this.router.navigate(['edit-branch']);
          }  
        },{  
          text: 'Delete',  
          handler: () => {  
            this.presentAlertConfirm(i);
            this.router.navigate(['branches']);
            
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
      message: 'Are You Sure you want to <strong>Delete</strong> Branch!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            console.log(this.branches[i].id);
            this.http.get(AppComponent.ApiUrl+"deletebranch.php?brid="+this.branches[i].id).subscribe(data =>{
              console.log("Response", data);
              this.getBranches();
              this.AlertDelete()
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
      message: 'Branch has been deleted sucesfully.',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/branches']);
    
      }


}
