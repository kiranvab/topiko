
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  buid: any;
  products: any;

  constructor(
    public actionsheetCtrl:ActionSheetController,
    public route:Router,
    private storage:Storage,
    public alertController: AlertController,
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(val=>{
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log("BID", this.buid)
        this.http.get(AppComponent.ApiUrl+"getmyproducts.php?bid="+this.buid).subscribe(data=>
          {
            this.products = data;
            console.log("Products", this.products);
          }
          );
      })
    });
    this.getProducts();
  }

  getProducts(){
    this.http.get(AppComponent.ApiUrl+"getmyproducts.php?bid="+this.buid).subscribe(data=>
      {
        this.products = data;
        console.log("Products", this.products);
      }
      );
  }

  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
            console.log("Product ID", i);
            this.storage.set("pid",  this.products[i].id);
            this.route.navigate(['/edit-product']);
          }  
        },{  
          text: 'Delete',  
          handler: () => {  
           console.log("Product ID", this.products[i].id);
           console.log('Delete clicked'); 
           this.presentAlertConfirm(i);
           this.route.navigate(['product']);
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  } 

  async presentAlertConfirm(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete!',
      message: 'Are You Sure you want to <strong>Delete</strong> Product!!!',
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
            console.log(this.products[i].id);
            this.http.get(AppComponent.ApiUrl+"deleteproduct.php?pid="+this.products[i].id).subscribe(data =>{
              console.log("Response", data);
              this.AlertDelete()
            })
            this.getProducts();
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
      message: 'Product has been deleted sucesfully.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
