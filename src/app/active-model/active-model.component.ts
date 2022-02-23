import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-active-model',
  templateUrl: './active-model.component.html',
  styleUrls: ['./active-model.component.scss']
})
export class ActiveModelComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  private dialogRef: MatDialogRef<ActiveModelComponent>,) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
  }

}
