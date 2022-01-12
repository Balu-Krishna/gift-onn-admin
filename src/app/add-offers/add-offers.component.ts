import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent implements OnInit {
  addOffersGroup: FormGroup
  category="Selete Categor"
  offerName="Enter Offer Name"
  description ="Enter Description"
  date="Enter Date"
  constructor(private fb:FormBuilder) { 
    this.addOffersGroup = this.fb.group({
      "category": ['',Validators.required],
      "offerName": ['Enter Offer Name',Validators.required],
      "description": ['Enter Description',Validators.required],
      "startDate": ['',Validators.required],
      "endDate": ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  addOffersSubmit(){
  }
}
