import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FreezeSuccessfulComponent } from '../freeze-successful/freeze-successful.component';

@Component({
  selector: 'app-freeze-category',
  templateUrl: './freeze-category.component.html',
  styleUrls: ['./freeze-category.component.scss']
})
export class FreezeCategoryComponent implements OnInit {

  rewardGroup: FormGroup
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FreezeCategoryComponent>, public dialog: MatDialog) {
    this.rewardGroup = this.fb.group({
      "reward": ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  rewardSubmit() {
    console.log("this.rewardGroup.value", this.rewardGroup.value)
    this.dialogRef.close()
    const dialogRef = this.dialog.open(FreezeSuccessfulComponent, {
      width: "30%"
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }
}
