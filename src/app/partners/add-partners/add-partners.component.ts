import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-partners",
  templateUrl: "./add-partners.component.html",
  styleUrls: ["./add-partners.component.scss"],
})
export class AddPartnersComponent implements OnInit {
  addPartnersGroup: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.addPartnersGroup = this.fb.group({
      partnersName: ["", Validators.required],
      partnersEmail: ["", Validators.required],
      partnersCategory: ["", Validators.required],
      partnersSubCategory: ["", Validators.required],
      contactNumber: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      productimage: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  submitForm() {
    this.submitted = true;
    console.log(this.addPartnersGroup.value);
  }
  savePartner() {
    this.submitForm();
  }
  cancleOnboardPartener() {
    this.addPartnersGroup.reset();
    this.router.navigate(["partners"]);
  }
  onboardPartner() {
    this.submitForm();
    if (this.addPartnersGroup.valid) {
      this.router.navigate(["add-e-signature"]);
    }
  }
  handleChange(files: FileList) {}
}
