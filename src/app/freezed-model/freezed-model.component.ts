import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-freezed-model',
  templateUrl: './freezed-model.component.html',
  styleUrls: ['./freezed-model.component.scss']
})
export class FreezedModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log("this.data",this.data)
   }

  ngOnInit(): void {
  }

}
