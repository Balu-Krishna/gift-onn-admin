import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
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
  vendorordeForm: FormGroup;
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

    this.vendorordeForm = this.fb.group({
      Selectid: [""],
      date: [""],
      time: [""],
      discount: [""],
      Order: [""],
      Customer: [""],


    });

    this.loyaltyForm = this.fb.group({

    });
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
  get of() {
    return this.vendorordeForm.controls;
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
    this.vendorordeForm.reset();
    this.loyaltyForm.reset();

  }
  close() {
    this.dialogRef.close();
    this.reset();
  }
  ngOnInit(): void { }


}

