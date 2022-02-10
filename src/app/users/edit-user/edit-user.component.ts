import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { SuccessfulModelComponent } from "../../successful-model/successful-model.component";

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
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {
    this.editUserForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      role: [""],
      department: [""],
      empid: [""],
      status: [""],
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    console.log(this.userId);
    const url = `${this.constants.EDIT_USER}${this.userId}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(url, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          data = data['data'][0];
          this.editUserForm.patchValue({
            firstName: data['firstName'],
            lastName:  data['lastName'],
            email:  data['email'],
            role:  data['role'],
            department:  data['department'],
            empid:  data['empid'],
            status:  data['status'],
          });
          console.log(data)
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  updateUser() {
    this.submitted = true;
    if (this.editUserForm.invalid) {
      return;
    }
    console.log("this.editUserForm.value", this.editUserForm.value);
    const url = `${this.constants.EDIT_USER}${this.userId}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = this.editUserForm.value
    this.apiHttpService
      .put(url, body, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
}
