import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RewardSuccessfulComponent } from '../reward-successful/reward-successful.component';

@Component({
  selector: 'app-reward-categories',
  templateUrl: './reward-categories.component.html',
  styleUrls: ['./reward-categories.component.scss']
})
export class RewardCategoriesComponent implements OnInit {
  rewardGroup:FormGroup
  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<RewardCategoriesComponent>,public dialog: MatDialog) { 
    this.rewardGroup = this.fb.group({
      "reward": ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  rewardSubmit(){
    console.log("this.rewardGroup.value",this.rewardGroup.value)
    this.dialogRef.close()
    const dialogRef = this.dialog.open(RewardSuccessfulComponent,{
      width:"30%"
     });
     dialogRef.afterClosed().subscribe(result => {
     });
    
  }
}
