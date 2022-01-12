import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-deny-product",
  templateUrl: "./deny-product.component.html",
  styleUrls: ["./deny-product.component.scss"],
})
export class DenyProductComponent implements OnInit {
  denyProduct: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DenyProductComponent>
  ) {
    console.log("this.data", this.data);
    this.denyProduct = this.fb.group({
      reason: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  denyProductSubmit() {
    console.log(this.denyProduct.value);
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
