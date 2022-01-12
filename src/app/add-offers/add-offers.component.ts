import { Component, } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent implements OnInit {


  addOffersGroup: FormGroup









  constructor(private fb: FormBuilder, private router: Router) {
    this.addOffersGroup = this.fb.group({

      category: [""],
      offerName: [""],
      description: [""],
      date: [""],
      storeId: [""],
      offerId: [""],
      offerCategoty: [""],
      subCategory: [""],
      SelectCountry: [""],
      SelectLocation: [""],
      Description: [""],
      startDate: [""],
      EndDate: [""],
    })
  }

  ngOnInit(): void {
  }
  addOffersSubmit() {

  }
}