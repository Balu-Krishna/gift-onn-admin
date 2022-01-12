import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating-for-customer',
  templateUrl: './rating-for-customer.component.html',
  styleUrls: ['./rating-for-customer.component.scss']
})
export class RatingForCustomerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<RatingForCustomerComponent>) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
  }
 close(){
   this.dialogRef.close()
 }
}
