import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  segmentModel: string;
  udata:any;
  uid:any;
  uname:any;
  ucity:any;
  profile:any;
  profession:any;
  uimage:any;

  constructor(
    public actionsheetCtrl: ActionSheetController,
    public route: Router,
    private storage:Storage,
    private http:HttpClient,
    private router:Router
  ) { }

  ngOnInit() {
    this.storage.get("userdetails").then(val =>{
      this.udata = val;
      this.uid = this.udata[0].id;
      console.log(this.udata[0].image);
      this.getprofile();
    })
  }

  getprofile()
  {
    this.http.get(AppComponent.ApiUrl+"profile.php?user_id="+this.uid).subscribe( data =>
      {
        this.profile = data;
        console.log(this.profile[0].image);
        this.uname = this.profile[0].name;
        this.ucity = this.profile[0].city   
        this.profession = this.profile[0].designation;
        this.uimage = this.profile[0].image;
      })
  }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'Settings',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  async openProfile() {
    const actionSheet = await this.actionsheetCtrl.create({
      // header: 'Modify your album',  
      buttons: [
        {
          text: 'View Profile',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Call',
          handler: () => {
            this.route.navigate(['calling']);
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Delete Post',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Report',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
      ]
    });
    await actionSheet.present();
  }

  editprofile(){
    this.storage.set("uid", this.uid);
    this.router.navigate(['/edit-profile']);
  }
}