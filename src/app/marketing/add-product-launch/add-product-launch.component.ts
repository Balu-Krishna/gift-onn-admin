import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-product-launch",
  templateUrl: "./add-product-launch.component.html",
  styleUrls: ["./add-product-launch.component.scss"],
})
export class AddProductLaunchComponent implements OnInit {
  addproductlanch: FormGroup;
  submitted: boolean;
  constructor(private fb: FormBuilder) {
    this.addproductlanch = this.fb.group({
      vendorId: ["", Validators.required],
      producId: ["", Validators.required],
      partnerId: ["", Validators.required],
      productCategory: ["", Validators.required],
      productSubCategory: ["", Validators.required],
      country: ["", Validators.required],
      location: ["", Validators.required],
      launchingDate: ["", Validators.required],
      time: ["", Validators.required],
      productimage: ["", Validators.required],
      productvedio: ["", Validators.required],
      productdescription: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  saveProductLaunch() {
    this.submitted = true;
  }
}
