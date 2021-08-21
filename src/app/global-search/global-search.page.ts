import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.page.html',
  styleUrls: ['./global-search.page.scss'],
})
export class GlobalSearchPage implements OnInit {
  segmentModel: string;
  @ViewChild('keyword') keyword;
  result: any;
  constructor(
    public actionsheetCtrl:ActionSheetController,
    public route:Router,
    private http:HttpClient
  ) { 
    this.segmentModel = "designer";
  }

  ngOnInit() {
  }

  async openMenu() {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'view',  
          handler: () => {  
            this.route.navigate(['plans']);
            console.log('Destructive clicked');  
          }  
        },{  
          text: 'Call',  
          handler: () => {  
            this.route.navigate(['verification'])
            console.log('Archive clicked');  
          }  
        }, {  
          text: 'Chat',   
          handler: () => {  
            console.log('Cancel clicked');  
          },  
        },
        {  
          text: 'Share',  
          handler: () => {  
            console.log('Promotions clicked');  
          },  
        }    
      ]  
    });  
    await actionSheet.present();  
  }  

  Search(){
    console.log(this.keyword.value)
    this.http.get(AppComponent.ApiUrl+"globalsearch.php?keyword="+this.keyword.value).subscribe(res=>{
      this.result = res;
      console.log("Search Results", this.result)
    })
    }

}
