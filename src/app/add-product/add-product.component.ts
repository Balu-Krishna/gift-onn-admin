import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  addProductGroup: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.addProductGroup = this.fb.group({
      productId: ["", Validators.required],
      storeName: ["", Validators.required],
      productName: ["", Validators.required],
      category: ["", Validators.required],
      subcategory: ["", Validators.required],
      price: ["", Validators.required],
      clarity: ["", Validators.required],
      type: ["", Validators.required],
      goldpurity: ["", Validators.required],
      size: ["", Validators.required],
      taxes: ["", Validators.required],
      unit: ["", Validators.required],
      gender: ["", Validators.required],
      totalprice: ["", Validators.required],
      productdescription: ["", Validators.required],
      productimage: ["", Validators.required],
      productvedio: [""],
    });
  }

  ngOnInit(): void {}
  get f() {
    return this.addProductGroup.controls;
  }
  addProductSubmit() {
    this.submitted = true;
    if (this.addProductGroup.invalid) {
      return;
    }
    const dialogRef = this.dialog.open(SuccessfulModelComponent, {
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    console.log("this.addProductGroup.value", this.addProductGroup.value);
  }
}
