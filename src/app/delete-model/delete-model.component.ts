import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';;

@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.scss']
})
export class DeleteModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  private dialogRef: MatDialogRef<DeleteModelComponent>,) { }

  ngOnInit(): void {
  }

}
