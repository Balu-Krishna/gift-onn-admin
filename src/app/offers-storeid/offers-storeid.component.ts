import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"

@Component({
  selector: 'app-offers-storeid',
  templateUrl: './offers-storeid.component.html',
  styleUrls: ['./offers-storeid.component.scss']
})
export class OffersStoreidComponent implements OnInit {
  OffersForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<OffersStoreidComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {

    console.log(data.filterType);
    this.OffersForm = this.fb.group({
      role: ["senior", Validators.required],
      department: ["it", Validators.required],
      status: ["active", Validators.required],
    });



  }
  get plf() {
    return this.OffersForm.controls;
  }
  submit() {
    console.log(this.OffersForm.value);
  }
  reset() {
    this.OffersForm.reset();
    this.OffersForm.patchValue({
      role: "senior",
      department: "it",
      status: "active",
    });
  }
  close() {
    this.dialogRef.close();
    this.reset();
  }
  ngOnInit(): void { }
}

