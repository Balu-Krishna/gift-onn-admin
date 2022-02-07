import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SuccessfulModelComponent } from "../../successful-model/successful-model.component";
@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.scss"],
})
export class AddVendorComponent implements OnInit {
  addVendorGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.addVendorGroup = this.fb.group({
      storename: ["", Validators.required],
      category: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      gst: ["", Validators.required],
      pan: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      locality: ["", Validators.required],
      address: ["", Validators.required],
      managername: ["", Validators.required],
      manageremail: ["", Validators.required],
      managerPhone: ["", Validators.required],
      storeId: ["", Validators.required],
      aboutstore: ["", Validators.required],
      managerImage: ["", Validators.required],
      logo: ["", Validators.required],
      storeImage: ["", Validators.required],
      storeCertifications: ["", Validators.required],
    });
  }

  ngOnInit(): void { }
  addVendorSubmit() {
    const dialogRef = this.dialog.open(SuccessfulModelComponent, {
      data: "vendor",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    console.log("this.addVendorGroup.value", this.addVendorGroup.value);
  }
  onBoarding() {
    this.router.navigate(["vendors/vendor-policies-view"]);
  }
  openManagerImage() {
    const input = <any>document.querySelector("#manager-image");
    input.click();
  }
  openLogoFile() {
    const input = <any>document.querySelector("#logo");
    input.click();
  }
  openStoreImageFile() {
    const input = <any>document.querySelector("#store-image");
    input.click();
  }
  openCerificationsFile() {
    const input = <any>document.querySelector("#store-cerifications");
    input.click();
  }
}
