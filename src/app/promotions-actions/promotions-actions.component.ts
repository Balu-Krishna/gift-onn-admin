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
  selector: "app-promotions-actions",
  templateUrl: "./promotions-actions.component.html",
  styleUrls: ["./promotions-actions.component.scss"],
})
export class PromotionsActionsComponent implements OnInit {
  vendorActionsForm: FormGroup;
  freezeGroup: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  submitted = false;
  freeze_success = false;
  types = "";
  constructor(
    public dialogRef: MatDialogRef<PromotionsActionsComponent>,
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
    console.log(this.vendorActionsForm.invalid);
    if(this.vendorActionsForm.invalid) {
       return;
    }
    if(this.data.name=='Deny')
    {
      this.types='Denied';
    }
    else
    {
      this.types='Hold';
    }
      const url = (this.data.name=='Deny')?`${this.constants.PROMOTIONS_DENY}${this.data.data.id}`:`${this.constants.PROMOTIONS_HOLD}${this.data.data.id}`;
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
               data: {"type":this.data.type,"ctype":this.types}
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
