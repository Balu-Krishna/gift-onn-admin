import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FreezeRoleComponent } from '../freeze-role/freeze-role.component';
import { RatingForCustomerComponent } from '../rating-for-customer/rating-for-customer.component';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addPartner() {
    this.router.navigate(['add-Partners']);   
  }

  action(value){
    console.log(value)
    if(value=='rating'){
      const dialogRef = this.dialog.open(RatingForCustomerComponent,{
        width:"50%",
        data:"partner"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='freeze'){
      const dialogRef = this.dialog.open(FreezeRoleComponent,{
        width:"50%",
        data:"partner"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='deny'){
      const dialogRef = this.dialog.open(DenyProductComponent,{
        width:"50%",
        data:"partner"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
    }

}

