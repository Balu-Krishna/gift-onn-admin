import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  userForm: FormGroup;
  vendorForm: FormGroup;
  productForm: FormGroup;
  customerForm: FormGroup;
  partnerForm: FormGroup;
  promotionForm: FormGroup;
  productLaunchForm: FormGroup;
  orderForm: FormGroup;
  couponsForm: FormGroup;
  vendororderForm: FormGroup;
  offerForm: FormGroup;
  loyaltyForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data.filterType);
    this.userForm = this.fb.group({
      role: ["senior", Validators.required],
      department: ["it", Validators.required],
      status: ["active", Validators.required],
    });
    this.vendorForm = this.fb.group({
      location: [""],
      vendorName: [""],
      storeId: [""],
      status: [""],
    });
    this.productForm = this.fb.group({
      productId: [""],
      storeId: [""],
      category: [""],
      subCategory: [""],
      gender: [""],
      taxes: [""],
      status: [""],
    });
    this.customerForm = this.fb.group({
      customerId: [""],
      country: [""],
      location: [""],
      rating: [""],
      date: [""],
      status: [""],
    });
    this.partnerForm = this.fb.group({
      partnerName: [""],
      partnerId: [""],
      category: [""],
      subCategory: [""],
      country: [""],
      location: [""],
      status: [""],
    });
    this.promotionForm = this.fb.group({
      promoId: [""],
      storeId: [""],
      category: [""],
      subCategory: [""],
      country: [""],
      startDate: [""],
      endDate: [""],
      status: [""],
    });
    this.productLaunchForm = this.fb.group({
      promoId: [""],
      storeId: [""],
      category: [""],
      subCategory: [""],
      country: [""],
      launchDate: [""],
      time: [""],
      status: [""],
    });
    this.orderForm = this.fb.group({
      storeId: [""],
      category: [""],
      subCategory: [""],
      status: [""],
    });
    this.couponsForm = this.fb.group({
      storeName: [""],
      couponType: [""],
      category: [""],
      subCategory: [""],
      startDate: [""],
      endDate: [""],
      store: [""],

    });
    this.vendororderForm = this.fb.group({
      storeId: [""],
      Date: [""],
      customerId: [""],
      orderId: [""],
      discount: [""],
      time: [""],
    });
    this.offerForm = this.fb.group({
      endDate: [""],
      startDate: [""],
      SubCategory: [""],
      category: [""],
      storeId: [""],
      location: [""],
      country: [""],
    });
    this.loyaltyForm = this.fb.group({
      endDate: [""],
      currency: [""],
      rewardType: [""],
    });
  }
  get plf() {
    return this.productLaunchForm.controls;
  }
  get uf() {
    return this.userForm.controls;
  }
  get vf() {
    return this.vendorForm.controls;
  }
  get pf() {
    return this.productForm.controls;
  }
  get cf() {
    return this.customerForm.controls;
  }
  get mpf() {
    return this.productForm.controls;
  }
  get orf() {
    return this.orderForm.controls;
  }
  get vof() {
    return this.vendororderForm.controls;
  }
  get off() {
    return this.offerForm.controls;
  }
  get lf() {
    return this.loyaltyForm.controls;
  }

  submit() {
    console.log(this.userForm.value);
  }
  reset() {
    this.userForm.reset();
    this.userForm.patchValue({
      role: "senior",
      department: "it",
      status: "active",
    });
    this.vendorForm.reset();
    this.productForm.reset();
    this.customerForm.reset();
    this.partnerForm.reset();
    this.promotionForm.reset();
    this.productLaunchForm.reset();
    this.orderForm.reset();
    this.vendororderForm.reset();
    this.offerForm.reset();
    this.loyaltyForm.reset();

  }
  close() {
    this.dialogRef.close();
    this.reset();
  }
  ngOnInit(): void { }
}
