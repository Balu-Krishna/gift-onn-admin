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
  loyaltyForm: FormGroup;
  vendorPaymentForm: FormGroup;
  partnerPaymentForm: FormGroup;
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
    this.loyaltyForm = this.fb.group({
      rewardType: [""],
      storeId: [""],
      currency: [""],
      endDate: [""],
    });
    this.vendorPaymentForm = this.fb.group({
      storeId: [""],
      vendor: [""],
      date: [""],
    });
    this.partnerPaymentForm = this.fb.group({
      partnerId: [""],
      vendor: [""],
      date: [""],
    });
  }
  get vpf() {
    return this.vendorPaymentForm.controls;
  }
  get ppf() {
    return this.partnerPaymentForm.controls;
  }
  get plf() {
    return this.loyaltyForm.controls;
  }
  get pdlf() {
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
    this.loyaltyForm.reset();
    this.vendorPaymentForm.reset();
    this.partnerPaymentForm.reset();
  }
  close() {
    this.dialogRef.close();
    this.reset();
  }
  ngOnInit(): void {}
}
