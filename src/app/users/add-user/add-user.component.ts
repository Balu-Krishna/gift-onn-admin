import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { SuccessfulModelComponent } from "src/app/successful-model/successful-model.component";
import { ConfirmedValidator } from "./confirmed.validator";
@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  addAdminGroup: FormGroup;

  submitted = false;
  hide = true;
  hide1 = true;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {
    this.addAdminGroup = this.fb.group(
      {
        firstName: [""],
        lastName: [""],
        email: [""],
        role: [""],
        department: [""],
        empid: [""],
        status: [""],
        password: [""],
        confirm: [""],
      },
      { validator: ConfirmedValidator("password", "confirm") }
    );
  }

  ngOnInit(): void {}
  addAdminSubmit() {
    this.submitted = true;
    if (this.addAdminGroup.invalid) {
      return;
    }
    console.log("this.addAdminGroup.value", this.addAdminGroup.value);
    const url = `${this.constants.ADD_USER}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    // this.addAdminGroup.removeControl('confirm');
    const body = this.addAdminGroup.value;
    this.apiHttpService
      .post(url, body, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          const dialogRef = this.dialog.open(SuccessfulModelComponent, {
            data: "user",
          });
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          });
          this.addAdminGroup.reset();
          console.log(data);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
}
