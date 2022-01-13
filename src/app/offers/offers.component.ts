import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FreezeRoleComponent } from '../freeze-role/freeze-role.component';
import { RatingForCustomerComponent } from '../rating-for-customer/rating-for-customer.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  action(value){
    console.log(value)
    if(value=='rating'){
      const dialogRef = this.dialog.open(RatingForCustomerComponent,{
        width:"50%",
        data:"offer"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='freeze'){
      const dialogRef = this.dialog.open(FreezeRoleComponent,{
        width:"50%",
        data:"offer"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='deny'){
      const dialogRef = this.dialog.open(DenyProductComponent,{
        width:"50%",
        data:"offer"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
    }

}
