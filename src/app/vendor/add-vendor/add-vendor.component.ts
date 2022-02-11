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
  submitted = false;
  hide = true;
  hide1 = true;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants,
    private router: Router,
  ) {
    this.addVendorGroup = this.fb.group({
      storename: [""],
      category: [""],
      phone: [""],
      email: [""],
      gst: [""],
      pan: [""],
      country: [""],
      state: [""],
      city: [""],
      locality: [""],
      address: [""],
      managername: [""],
      manageremail: [""],
      managerPhone: [""],
      storeId: [""],
      aboutstore: [""],
      managerImage: [""],
      logo: [""],
      storeImage: [""],
      storeCertifications: [""],
    });
  }

  ngOnInit(): void { }

  addVendorSubmit() {
    this.submitted = true;
    if (this.addVendorSubmit. invalid) {
      return;
    }
    console.log("this.addVendorSubmit.value", this.addVendorSubmit. value);
    const url = `${this.constants.ADD_VENDOR}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    // this.addVendorSubmit.removeControl('confirm');
    const body = this.addVendorGroup.value;
    this.apiHttpService
      .post(url, body, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          const dialogRef = this.dialog.open(SuccessfulModelComponent, {
            data: "vendor",
          });
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          });
          this. addVendorGroup.reset();
          console.log(data);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
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
