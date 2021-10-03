import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {

  segmentModel: string;
  text: string;
  qrdata: any;
  showqrdata:any=false;
  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private qrScanner: QRScanner,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'History',
          handler: () => {
            this.route.navigate(['history']);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Detail',
          handler: () => {
            console.log('Archive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  ScanCode(){
    this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         this.text = text
         alert('Scanned Details: '+this.text);
         this.http.get(AppComponent.ApiUrl+"getqrdetails.php?qrid="+this.text).subscribe((response)=>{
           this.qrdata = response;
           if(this.qrdata==0){
             alert("this code is not valid or Outside of Application");
             this.route.navigate(['/home']);
           }
           else{
             //alert(this.qrdata);
            this.qrScanner.hide();
             this.showqrdata=true;
             scanSub.unsubscribe(); 
           }
         })

          // hide camera preview
         // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
  }

}
