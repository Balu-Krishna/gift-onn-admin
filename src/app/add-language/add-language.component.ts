import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {
  addLanguageGroup:FormGroup
  constructor(private fb:FormBuilder) {
    this.addLanguageGroup = this.fb.group({
      "languageId": ['Enter Language Id',],
      "name": ['Enter Language Name',],
      "value": ['Enter Language value',],
      "status": ['',],
    })
   }

  ngOnInit(): void {
  }
  addLanguageSubmit(){
    console.log("this.addLanguageGroup.value",this.addLanguageGroup.value)
  }
}
