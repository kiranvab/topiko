import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  mybusiness: any;
  owner: any;
  address: any;
  busines_name: any;
  bid: any;
  offers: any;
  employees: any;

  constructor(
    public route:Router,
    public actionsheetCtrl:ActionSheetController,
    private storage:Storage,
    private http:HttpClient,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe((val)=>{
    this.storage.get("mybusiness").then((val)=>{
      this.mybusiness = val;
      console.log("My business Details:", this.mybusiness);
      this.owner = this.mybusiness[0].owner_name;
      this.address = this.mybusiness[0].business_address;
      this.busines_name = this.mybusiness[0].business_name
      this.bid= this.mybusiness[0].id;
        this.http.get(AppComponent.ApiUrl+"getemployees.php?bid="+this.bid).subscribe(data=>
          {
            this.employees = data;
            console.log("Employees", this.employees);
          }
          );
      })
    });
  }

  async openMenu(i) {  
    const actionSheet = await this.actionsheetCtrl.create({  
     // header: 'Modify your album',  
      buttons: [  
        {  
          text: 'Edit',  
          handler: () => {  
           this.storage.set("empid", this.employees[i].id )
            this.route.navigate(['/edit-employee'])
          }  
        },{  
          text: 'Delete',  
          handler: () => { 
            console.log(this.employees[i].id);
            this.http.get(AppComponent.ApiUrl+"deleteemployee.php?empid="+this.employees[i].id).subscribe(Response =>{
              if(Response =1){
                alert("Employee Deleted Sucesfully");
              }
              else{
                alert("Failed to delete Employee");
              }
            })
           console.log('Archive clicked');  
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  } 
}
