import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Constants } from "src/app/core/_config/constants";
import { RatingSuccessModelComponent } from "../ratings-success-model/ratings-success-model.component";

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
  templateUrl: "./partner-actions.component.html",
  styleUrls: ["./partner-actions.component.scss"],
})
export class PartnerActionsComponent implements OnInit {
  vendorActionsForm: FormGroup;

  freezeGroup: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  submitted = false;
  types='';
  constructor(
    public dialogRef: MatDialogRef<PartnerActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    public constants: Constants,
    public apiHttpService: ApiHttpService,
  ) {
    console.log(data);
    this.vendorActionsForm = this.fb.group({
      text: ["", Validators.required],
      rating: [""],
    });

    this.freezeGroup = this.fb.group({
      comment: ["", Validators.required],
      reason: ["", Validators.required]
    });
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close(this.selectedValue);
  }
  submitForm() {
    console.log(this.data);
    this.submitted = true;
    console.log(this.freezeGroup.invalid);

    if(this.freezeGroup.invalid) {
       return;
    }
    if(this.data.name=='Freeze')
    {
      this.types='Freeze';
    }
    else
    {
      this.types='Unfreeze';
    }
      const url = `${this.constants.PARTNER_FREEZE}${this.data.data._id}`;
      let headers = {
        Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
      };
      const body = {"type":this.types,"reason":this.freezeGroup.value.reason,"comment":this.freezeGroup.value.comment};
      this.apiHttpService
        .put(url, body, {headers})
        .pipe(first())
        .subscribe(
          (data) => {
            this.close();
             const dialogRef = this.dialog.open(FreezedModelComponent, {
               width: "30%",
               data: {"type":this.data.type,"ctype":this.types}
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
    console.log("this.data");
    this.submitted = true;
    console.log(this.vendorActionsForm.invalid);
    if(this.vendorActionsForm.invalid  || this.selectedValue==0) {
       return;
    }
      const url = `${this.constants.PARTNER_RATING}${this.data.data._id}`;
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
              const dialogRef = this.dialog.open(RatingSuccessModelComponent, {
                width: "30%",
                data: this.data.type,
              });
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
