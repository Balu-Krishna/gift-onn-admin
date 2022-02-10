import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { SuccessfulModelComponent } from "../../successful-model/successful-model.component";
@Component({
  selector: "app-add-vendor",
  templateUrl: "./add-vendor.component.html",
  styleUrls: ["./add-vendor.component.scss"],
})
export class AddVendorComponent implements OnInit {
  addVendorGroup: FormGroup;
  addCountry = [];
  addCategory =[]; 
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
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

  ngOnInit(): void {
    this.showData();
    this. showDataCategory();
   }
  
  showData(): void {
    const url = this.constants.GET_ADD_VENDOR;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(url ,{headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this.addCountry = data['data'];
        
          console.log(data['data']);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }

  showDataCategory(): void {
    const url = this.constants.GET_ADD_VENDOR_CATEGORY;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(url ,{headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this.addCategory = data['data'];
        
          console.log(data['data']);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }




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
