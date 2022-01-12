import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
    private fb: FormBuilder
  ) {
    this.vendorActionsForm = this.fb.group({
      reason: ["", Validators.required],
      text: ["", Validators.required],
      rating: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
  submitForm() {
    if (["Approve", "Freeze"].includes(this.data)) {
      this.submitted = true;
    } else {
      close();
    }
  }
  countStar(star) {
    this.selectedValue = star;
    console.log("Value of star", star);
  }
}
