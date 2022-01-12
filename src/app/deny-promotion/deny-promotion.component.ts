import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deny-promotion',
  templateUrl: './deny-promotion.component.html',
  styleUrls: ['./deny-promotion.component.scss']
})
export class DenyPromotionComponent implements OnInit {
  denyPromotion:FormGroup
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<DenyPromotionComponent>) {
    this.denyPromotion = this.fb.group({
      "dropDown1": ['',Validators.required],
      "dropDown2": ['',Validators.required],
      "dropDown3": ['',Validators.required],
      "description": ['',Validators.required],
      
    })
   }

  ngOnInit(): void {
  }

  denyPromotionSubmit(){
    console.log('this.denyPromotion.value',this.denyPromotion.value)
  }
  close(){
    this.dialogRef.close()
  }

}
