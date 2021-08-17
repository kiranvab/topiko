import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';
import { Observable } from 'Rxjs/rx';
import { Subscription } from 'rxjs/Subscription';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {
  ObservableVar : Subscription;
  partnerId: any;
  userDetails: any;
  user_id: any;
  bottomdiv:any=false;
  @ViewChild('message') message;
  @ViewChild('content') private content: any;
  docfile:any;
  imagefile:any;
  audfile:any;
  vidfile:any;
  chatresponse: any;
  chatroom: any;
  chatmessages: any;
  partner_name: any;
  fileType: string;
  Ufile: any;
  newfile: any;
  type: any;
  path: any;
  FileName: any;
  fileurl: string;
  image: string;

  constructor(
    private route: Router,
    private storage : Storage,
    private http:HttpClient,
    private file: File,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    private camera : Camera
  ) { 
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.fileurl = "https://topiko.com/app/chatfiles/";
  }

  ngOnInit() {
    this.storage.get("chatroom").then((val)=>{
      this.chatroom = val;
    });
    this.storage.get('userdetails').then((udetails)=>{
      this.userDetails = udetails;
      console.log("UserDetails:", this.userDetails)
      this.user_id = this.userDetails[0].id;
      console.log(this.user_id,'User ID')
    });
    this.storage.get("chatname").then((cname)=>{
    this.partner_name= cname;
    console.log('partner_name:',this.partner_name);
    });
    this.callFun();
   
  }

  callFun(){
    this.ObservableVar = Observable.interval(3000).subscribe(()=>{
      this.http.get(AppComponent.ApiUrl+"getchatmessages.php?chatroom="+this.chatroom).subscribe((data)=>{
        this.chatmessages = data;
        console.log("chatmessages", this.chatmessages)
      });
      this. scrollToBottomOnInit();
    });
  }

  async UploadDocument(event:any){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please Wait',
    });
    await loading.present();
    this.fileType="doc"
    this.Ufile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.Ufile);
    this.http.post(AppComponent.ApiUrl+"uploadfile.php", formData).subscribe((resdata)=>{
      console.log(resdata);
      if(resdata==1){
        this.FileName= this.docfile.substr(this.docfile.lastIndexOf('\\') + 1),
        this.path=this.FileName;
        this.type = "doc";
        this.SendMessage();
      }
    })
    
  }



  async pickGallery(event:any){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please Wait',
    });
    await loading.present();
    this.fileType="doc"
    this.Ufile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.Ufile);
    this.http.post(AppComponent.ApiUrl+"uploadfile.php", formData).subscribe((resdata)=>{
      console.log(resdata);
      if(resdata==1){
        this.FileName= this.imagefile.substr(this.imagefile.lastIndexOf('\\') + 1),
        this.path=this.FileName;
        this.type = "image";
        var link = AppComponent.ApiUrl+"chatmessage.php";
        var Data = JSON.stringify({
          'chatroom':this.chatroom,
          'posted_by':this.user_id,
          'type':'image',
          'message': this.message.value,
          'filepath':this.path
        });
        console.log(Data);
        this.http.post(link,Data).subscribe((cresponse)=>{
          this.chatresponse=cresponse;
          console.log("chat Response:", this.chatresponse);
          if(this.chatresponse==1){
            this.loadingController.dismiss();
            this.message.value='';
            this.bottomdiv =false;
            this.route.navigate(['chatbox']);
          }
        })
      }
    })
    
  }


  async UploadAudio(event:any){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please Wait',
    });
    await loading.present();
    this.fileType="doc"
    this.Ufile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.Ufile);
    this.http.post(AppComponent.ApiUrl+"uploadfile.php", formData).subscribe((resdata)=>{
      console.log(resdata);
      if(resdata==1){
        this.FileName= this.audfile.substr(this.audfile.lastIndexOf('\\') + 1),
        this.path=this.FileName;
        var link = AppComponent.ApiUrl+"chatmessage.php";
        var Data = JSON.stringify({
          'chatroom':this.chatroom,
          'posted_by':this.user_id,
          'type':'audio',
          'message': this.message.value,
          'filepath':this.path
        });
        console.log(Data);
        this.http.post(link,Data).subscribe((cresponse)=>{
          this.chatresponse=cresponse;
          console.log("chat Response:", this.chatresponse);
          if(this.chatresponse==1){
            this.loadingController.dismiss();
            this.message.value='';
            this.bottomdiv =false;
            this.route.navigate(['chatbox']);
          }
        })
      }
    })
    
  }


  async UploadVideo(event:any){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please Wait',
    });
    await loading.present();
    this.fileType="doc"
    this.Ufile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.Ufile);
    this.http.post(AppComponent.ApiUrl+"uploadfile.php", formData).subscribe((resdata)=>{
      console.log(resdata);
      if(resdata==1){
        this.FileName= this.vidfile.substr(this.vidfile.lastIndexOf('\\') + 1),
        this.path=this.FileName;
        var link = AppComponent.ApiUrl+"chatmessage.php";
        var Data = JSON.stringify({
          'chatroom':this.chatroom,
          'posted_by':this.user_id,
          'type':'video',
          'message': this.message.value,
          'filepath':this.path
        });
        console.log(Data);
        this.http.post(link,Data).subscribe((cresponse)=>{
          this.chatresponse=cresponse;
          console.log("chat Response:", this.chatresponse);
          if(this.chatresponse==1){
            this.loadingController.dismiss();
            this.message.value='';
            this.bottomdiv =false;
            this.route.navigate(['chatbox']);
          }
        })
      }
    })
    
  }
 
   scrollToBottomOnInit() {
    this.content.scrollToBottom(100);
  }
  attachments(){
    if(this.bottomdiv==false){
      this.bottomdiv=true;
    }
    else{
      this.bottomdiv=false;
    }
  }

  TakePictrue(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    });
    var link = AppComponent.ApiUrl+"chatmessage.php";
    var Data = JSON.stringify({
      'chatroom':this.chatroom,
      'posted_by':this.user_id,
      'type':"image",
      'message': this.message.value,
      'filepath':this.image
    });
    console.log(Data);
    this.http.post(link,Data).subscribe((cresponse)=>{
      this.chatresponse=cresponse;
      console.log("chat Response:", this.chatresponse);
      if(this.chatresponse==1){
        this.loadingController.dismiss();
        this.message.value='';
        this.bottomdiv =false;
        this.route.navigate(['chatbox']);
      }
    })
  }


 async SendMessage(){
    var link = AppComponent.ApiUrl+"chatmessage.php";
    var Data = JSON.stringify({
      'chatroom':this.chatroom,
      'posted_by':this.user_id,
      'type':this.type,
      'message': this.message.value,
      'filepath':this.path
    });
    console.log(Data);
    this.http.post(link,Data).subscribe((cresponse)=>{
      this.chatresponse=cresponse;
      console.log("chat Response:", this.chatresponse);
      if(this.chatresponse==1){
        this.loadingController.dismiss();
        this.message.value='';
        this.bottomdiv =false;
        this.route.navigate(['chatbox']);
      }
    })
    
  }
  ionViewDidLeave(){
    this.ObservableVar.unsubscribe();
  }
  diSable(){
    this.ObservableVar.unsubscribe();
  }
  ReActivate(){
   this.callFun();
  }
  ScrollUp(){
    alert("scroll")
    this.ObservableVar.unsubscribe();
  }

}
