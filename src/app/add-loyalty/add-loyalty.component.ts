import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-loyalty',
  templateUrl: './add-loyalty.component.html',
  styleUrls: ['./add-loyalty.component.scss']
})
export class AddLoyaltyComponent implements OnInit {
  addLayalty: FormGroup
  constructor(private fb: FormBuilder) {
    this.addLayalty = this.fb.group({
      "purchaserName": ['', Validators.required],
      "productId": ['', Validators.required],
      "amount": ['', Validators.required],
      "points": ['', Validators.required],
      "currencyCode": ['', Validators.required],
      "expiredDate": ['', Validators.required],
      "earnpoints": ['', Validators.required],


    })
  }

  ngOnInit(): void {
  }


  addLayaltySubmit() {
    console.log(this.addLayalty.value, "this.addLayalty.value")
  }

}
