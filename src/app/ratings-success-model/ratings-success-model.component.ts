import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-successed-model',
  templateUrl: './ratings-success-model.component.html',
  styleUrls: ['./ratings-success-model.component.scss']
})
export class RatingSuccessModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
   // this.data;
  }

}
