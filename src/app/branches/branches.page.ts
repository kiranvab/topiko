import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.storage.get("bid").then(val=>
      {
        this.buid = val;
        console.log(this.buid);
        this.http.get(AppComponent.ApiUrl+"getbranches.php?bid="+this.buid).subscribe(data =>{
          this.branches = data;
        })
      })
  }

}
