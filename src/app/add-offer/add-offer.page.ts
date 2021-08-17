import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.page.html',
  styleUrls: ['./add-offer.page.scss'],
})
export class AddOfferPage implements OnInit {
  @ViewChild('title') title;
  @ViewChild('tags') tags;
  @ViewChild('fromdate') fromdate;
  @ViewChild('todate') todate;
  @ViewChild('description') description;
  @ViewChild('actual_price') actual_price;
  @ViewChild('discount_price') discount_price;
  @ViewChild('branch') branch;
  mybusiness: any;
  owner: any;
  address: any;
  busines_name: any;
  bid: any;
  branches: any;
  image:any;
  buid:any;

  constructor(
    private route: Router,
    private http: HttpClient,
    private storage : Storage,
    private router: ActivatedRoute,
    private camera:Camera
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe((res)=>{
          this.branches = res;
          console.log('Branches', this.branches);
        })
      })
    // this.storage.get("mybusiness").then((val)=>{
    //   this.mybusiness = val;
    //   console.log("My business Details:", this.mybusiness);
    //   this.owner = this.mybusiness[0].owner_name;
    //   this.address = this.mybusiness[0].business_address;
    //   this.busines_name = this.mybusiness[0].business_name
    //   this.bid= this.mybusiness[0].id;
    // })
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

  AddOffer(){
    if(this.title.value==''&& this.tags.value==''&&this.fromdate.value==''&&this.todate.vallue==''&&this.description.value==''&&this.actual_price.value==''&&this.discount_price.value==''){
      alert("Please fill all fields");
    }
    else{
      var link = AppComponent.ApiUrl+"addoffer.php";
      var Data = JSON.stringify({
        'business_id':this.buid,
        'title':this.title.value,
        'tags':this.tags.value,
        'fromdate':this.fromdate.value,
        'todate':this.todate.value,
        'description':this.description.value,
        'actual_price':this.actual_price.value,
        'discount_price':this.discount_price.value,
        'branch_id':this.branch.value,
        'image':this.image
      });

      console.log("offer Data:", Data);
      this.http.post(link,Data).subscribe(response=>{
        console.log(response);
        if(response = 1){
          this.route.navigate(['offers']);
        }
        else{
          alert("Failed to add Offer");
        }
      })
    }
  }

}