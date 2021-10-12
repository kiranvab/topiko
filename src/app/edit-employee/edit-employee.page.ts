import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {
emp_id:any;
empdata:any;
name:any;
mobile:any;
language:any;
designation:any;
  chat: any;
  video: any;
  call: any;
  callrecord: any;
  invoice: any;
  delivery: number;
  upd: Object;
  image: string;
  constructor(
    private storage: Storage,
    private http:HttpClient,
    private router:Router,
    private camera:Camera,
  ) { }

  ngOnInit() {
    this.storage.get("empid").then(val =>{
      this.emp_id = val;
      console.log("Employee ID", this.emp_id);
      this.http.get(AppComponent.ApiUrl+"getemployee.php?empid="+this.emp_id).subscribe(response =>{
        this.empdata = response
        this.name=this.empdata[0].name;
        this.mobile=this.empdata[0].mobile;
        this.designation=this.empdata[0].designation;
        this.language=this.empdata[0].language;
        console.log(this.empdata);
      })
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
  
  
  getPicture(){
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    });
}

  update(){
    var link = AppComponent.ApiUrl+"updateemployee.php";
    var emp = JSON.stringify({
      "image":this.image,
      "empid":this.emp_id,
      "name":this.name,
      "mobile":this.mobile,
      "designation":this.designation,
      "language":this.language,
      'chat':this.chat,
      'video':this.video,
      'call':this.call,
      'callrecord':this.callrecord,
      'invoice':this.invoice,
      'delivery':this.delivery,
    })
    console.log(emp);
    this.http.post(link,emp).subscribe(Response =>{
      this.upd = Response;
      console.log(this.upd);
      if(this.upd == 1){
        alert("Employee Updated Sucesfully");
        this.router.navigate(['employee']);
      }
      else
      {
        alert("Failed To Update Employee");
      }
    })
  }

  
}
