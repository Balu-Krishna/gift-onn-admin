import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-successful-model',
  templateUrl: './successful-model.component.html',
  styleUrls: ['./successful-model.component.scss']
})
export class SuccessfulModelComponent implements OnInit {

constructor(@Inject(MAT_DIALOG_DATA) public data,
  private dialogRef: MatDialogRef<SuccessfulModelComponent>,) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
  }

}
