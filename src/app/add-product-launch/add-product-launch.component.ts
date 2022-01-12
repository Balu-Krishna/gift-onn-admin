import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-launch',
  templateUrl: './add-product-launch.component.html',
  styleUrls: ['./add-product-launch.component.scss']
})
export class AddProductLaunchComponent implements OnInit {
  addproductlanch:FormGroup
  constructor(private fb:FormBuilder) { 
    this.addproductlanch = this.fb.group({
      "vendorId": ['Enter Vendor Id',Validators.required],
      "partnerId": ['Enter Partner Id',Validators.required],
      "productCategory": ['',Validators.required],
      "productSubCategory": ['',Validators.required],
      "country": ['',Validators.required],
      "location": ['',Validators.required],
      "endDate": ['',Validators.required],
      "productimage": ['',Validators.required],
      "productvedio": ['',Validators.required],
      "productdescription":  ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
