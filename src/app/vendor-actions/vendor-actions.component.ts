import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";

@Component({
  selector: "app-vendor-actions",
  templateUrl: "./vendor-actions.component.html",
  styleUrls: ["./vendor-actions.component.scss"],
})
export class VendorActionsComponent implements OnInit {
  vendorActionsForm: FormGroup;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;
  submitted = false;
  constructor(
    public dialogRef: MatDialogRef<VendorActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    console.log(data);
    this.vendorActionsForm = this.fb.group({
      reason: ["", Validators.required],
      text: ["", Validators.required],
      rating: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close(this.selectedValue);
  }
  submitForm() {
    console.log(this.data);
    this.close();
    if (["Approve", "Freeze"].includes(this.data.name)) {
      this.submitted = true;
      const dialogRef = this.dialog.open(FreezedModelComponent, {
        width: "30%",
        data: this.data.type,
      });
    }
  }
  countStar(star) {
    this.selectedValue = star;
    console.log("Value of star", star);
  }
}
