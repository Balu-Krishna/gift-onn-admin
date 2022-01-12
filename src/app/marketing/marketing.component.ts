import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApprovedModelComponent } from '../approved-model/approved-model.component';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { DenyPromotionComponent } from '../deny-promotion/deny-promotion.component';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  action(value){
    console.log(value)
    if(value=='deny'){
      const dialogRef = this.dialog.open(DenyProductComponent,{
        width:"50%",
        data:"promotion"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='denyPL'){
      const dialogRef = this.dialog.open(DenyProductComponent,{
        width:"50%",
        data:"productLauncher"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='approve'){
      const dialogRef = this.dialog.open(ApprovedModelComponent,{
        width:"30%",
        data:"promotion"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='approvePL'){
      const dialogRef = this.dialog.open(ApprovedModelComponent,{
        width:"30%",
        data:"productLauncher"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
    }
}
