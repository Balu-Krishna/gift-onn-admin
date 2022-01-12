import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-approved-model',
  templateUrl: './approved-model.component.html',
  styleUrls: ['./approved-model.component.scss']
})
export class ApprovedModelComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  private dialogRef: MatDialogRef<ApprovedModelComponent>,) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
  }

}
