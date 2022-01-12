import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { ConfirmedValidator } from "../add-user/confirmed.validator";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  submitted = false;
  hide = true;
  hide1 = true;
  userId;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.editUserForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      role: ["", Validators.required],
      department: ["", Validators.required],
      id: ["", Validators.required],
      status: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    console.log(this.userId);
  }
  saveUser() {
    this.submitted = true;
    if (this.editUserForm.invalid) {
      return;
    }
    console.log("this.editUserForm.value", this.editUserForm.value);
    const dialogRef = this.dialog.open(SuccessfulModelComponent, {
      data: "user",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
