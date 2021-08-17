import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  buid: any;
  name: any;
  mobile: any;
  tags: any;
  language: any;
  chat: number;
  video: number;
  call: number;
  delivery: number;
  user_image: any;
  payment_image: any;
  callrecord: number;
  invoice: number;
  response: Object;
  mybusiness: any;
  owner: any;
  address: any;
  busines_name: any;
  bid: any;
  employees: Object;

  constructor(
    private storage:Storage,
    private http:HttpClient,
    private route:Router,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("mybusiness").then((val)=>{
      this.mybusiness = val;
      console.log("My business Details:", this.mybusiness);
      this.owner = this.mybusiness[0].owner_name;
      this.address = this.mybusiness[0].business_address;
      this.busines_name = this.mybusiness[0].business_name
      this.buid= this.mybusiness[0].id;
        this.http.get(AppComponent.ApiUrl+"getemployees.php?bid="+this.bid).subscribe(data=>
          {
            this.employees = data;
            console.log("Employees", this.employees);
          }
          );
      })
  }

  Chatstatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.chat=1
    }
    else{
      isChecked=false;
      this.chat=0
    }
    
      console.log(isChecked);
  }

  VideoStatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.video=1
    }
    else{
      isChecked=false;
      this.video=0
    }
    
      console.log(isChecked);
  }

  Callstatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.call=1
    }
    else{
      isChecked=false;
      this.call=0
    }
    
      console.log(isChecked);
  }

  Deliverystatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.delivery=1
    }
    else{
      isChecked=false;
      this.delivery=0
    }
    
      console.log(isChecked);
  }

  Recordstatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.callrecord=1
    }
    else{
      isChecked=false;
      this.callrecord=0
    }
    
      console.log(isChecked);
  }

  Invoicestatus(isChecked){
    if(isChecked==true){
      isChecked=true
      this.invoice=1
    }
    else{
      isChecked=false;
      this.invoice=0
    }
    
      console.log(isChecked);
  }
adduserImage(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.user_image=base64Image
  }, (err) => {
   
  });
}

  submit(){
    var link = AppComponent.ApiUrl+"addemployee.php";
    var myData = JSON.stringify({
      "bid":this.buid,
      'name':this.name,
      'mobile':this.mobile,
      'tags':this.tags,
      'language':this.language,
      'chat':this.chat,
      'video':this.video,
      'call':this.call,
      'delivery':this.delivery,
      'user_image':this.user_image,
      'payment_image':this.payment_image,
      'callrecord':this.callrecord,
      'invoice':this.invoice
    })
    console.log(myData);
    this.http.post(link,myData).subscribe((response)=>{
      this.response = response;

      console.log(this.response);
      if(this.response==1){
        alert("employee added sucessfully");
        this.route.navigate(['/employee']);
      }
    })
  }
}
