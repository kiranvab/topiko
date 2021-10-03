import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
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
  @ViewChild('scrollElement') content: IonContent;
  ObservableVar : Subscription;
  ObservableVar1 : Subscription;
  partnerId: any;
  userDetails: any;
  user_id: any;
  bottomdiv:any=false;
  @ViewChild('message') message;
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
  sub: Subscription;
  last_seen: any;
  online: any;

  constructor(
    private route: Router,
    private storage : Storage,
    private http:HttpClient,
    private file: File,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    private camera : Camera,
    private router : ActivatedRoute
  ) { 
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.fileurl = "https://topiko.com/app/chatfiles/";
    
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.chatroom = params["room"];
      this.partner_name= params["name"];
      this.last_seen = params['last_seen'];
      this.online = params['onine'];
      console.log("chatroom :", this.chatroom);
      console.log("partner Name:", this.partner_name);
      this.http.get(AppComponent.ApiUrl+"getchatmessages.php?chatroom="+this.chatroom).subscribe((data)=>{
        this.chatmessages = data;
        console.log("chatmessages", this.chatmessages)
        this. scrollToBottomOnInit();
      });
  });
    this.storage.get('userdetails').then((udetails)=>{
      this.userDetails = udetails;
      console.log("UserDetails:", this.userDetails)
      this.user_id = this.userDetails[0].id;
      console.log(this.user_id,'User ID')
    });
    
    this.ObservableVar = Observable.interval(2000).subscribe(()=>{
      this.http.get(AppComponent.ApiUrl+"getchatmessages.php?chatroom="+this.chatroom).subscribe((data)=>{
        this.chatmessages = data;
        console.log("chatmessages", this.chatmessages)
      });
      
    });

    this.ObservableVar1 = Observable.interval(100).subscribe(()=>{
      this. scrollToBottomOnInit();
    });

  }

  callFun(){

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
    var element = document.getElementById("condiv");
   element.scrollTop = element.scrollHeight - element.clientHeight;
   
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
