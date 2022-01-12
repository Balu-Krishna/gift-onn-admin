import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-loyalty',
  templateUrl: './add-loyalty.component.html',
  styleUrls: ['./add-loyalty.component.scss']
})
export class AddLoyaltyComponent implements OnInit {
  addLayalty:FormGroup
  constructor(private fb:FormBuilder) {
    this.addLayalty = this.fb.group({
      "purchaserName": ['Enter Purchaser Name',Validators.required],
      "productId": ['Enter Product Id',Validators.required],
      "amount": ['Enter Amount',Validators.required],
      "points": ['Selete Currency Code',Validators.required],
      "currencyCode": ['Enter Currency Code',Validators.required],
      "expiredDate": ['',Validators.required],
      "earnpoints": ['Enter Earn Points',Validators.required],
      

    })
   }

  ngOnInit(): void {
  }


  addLayaltySubmit(){
    console.log(this.addLayalty.value,"this.addLayalty.value")
  }

}
