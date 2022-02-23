import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Constants } from "src/app/core/_config/constants";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { first } from "rxjs/operators";
@Component({
  selector: "app-vendor-actions",
  templateUrl: "./customer-actions.component.html",
  styleUrls: ["./customer-actions.component.scss"],
})
export class CustomerActionsComponent implements OnInit {
  vendorActionsForm: FormGroup;
  vendorRatingForm: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  submitted = false;
  freeze_success = false;
  rating_success = false;
  constructor(
    public dialogRef: MatDialogRef<CustomerActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    public constants: Constants,
    public apiHttpService: ApiHttpService,
  ) {
    console.log(data);
    this.vendorActionsForm = this.fb.group({
      reason: ["", Validators.required],
      text: ["", Validators.required]
    });
    this.vendorRatingForm = this.fb.group({
      reason: ["", Validators.required],
      rating: [""]
    });
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close(this.selectedValue);
  }
  submitForm() {
    console.log(this.data);
    this.submitted = true;
    console.log(this.vendorActionsForm.invalid);
    if(this.vendorActionsForm.invalid) {
       return;
    }
      const url = `${this.constants.UPDATE_CUSTOMER_FREEZE}${this.data.data.id}`;
      let headers = {
        Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
      };
      const body = {"reason":this.vendorActionsForm.value.reason,"comment":this.vendorActionsForm.value.text};
      this.apiHttpService
        .put(url, body, {headers})
        .pipe(first())
        .subscribe(
          (data) => {
            this.close();
            this.freeze_success=true;
             const dialogRef = this.dialog.open(FreezedModelComponent, {
               width: "30%",
               data: this.data.type,
             });
           //  this.submitted = false;
            
          },
          (error) => {
            console.log(error.error.message);
          }
        );
  }


  submitratingForm() {
    console.log(this.data);
    this.submitted = true;
    console.log(this.vendorRatingForm.invalid);

    if(this.vendorRatingForm.invalid  && this.selectedValue==0) {
       return;
    }
      const url = `${this.constants.UPDATE_CUSTOMER_RATING}${this.data.data.id}`;
      let headers = {
        Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
      };
      const body = {"rating":this.selectedValue,"comment":this.vendorActionsForm.value.text};
      this.apiHttpService
        .put(url, body, {headers})
        .pipe(first())
        .subscribe(
          (data) => {
            this.close();
            this.freeze_success=true;
             const dialogRef = this.dialog.open(FreezedModelComponent, {
               width: "30%",
               data: this.data.type,
             });
           //  this.submitted = false;
            
          },
          (error) => {
            console.log(error.error.message);
          }
        );
  }

  countStar(star) {
    this.selectedValue = star;
    console.log("Value of star", star);
  }
}
