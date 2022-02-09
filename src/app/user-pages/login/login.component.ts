import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

export class LoginComponent implements OnInit {
  loginGroup;
  submitted = false;
  hide = true;
  returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants,
    private route: ActivatedRoute
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  get f() {
    return this.loginGroup.controls;
  }
  loginSubmit() {
    console.log(this.loginGroup.value.email, this.loginGroup.value.password);
    this.submitted = true;
    if (this.loginGroup.invalid) {
      return;
    }
    const body = {
      email: this.loginGroup.value.email,
      password: this.loginGroup.value.password,
    };

    this.authenticationService
      .login(body)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigateByUrl(this.returnUrl);
          this.router.navigate(["dashboard"]);
        },
        (error) => {
          if (error.error.message == "password for this email is not right") {
            this.loginGroup.controls["password"].setErrors({ incorrect: true });
          } else if (error.error.message == "No User Found") {
            this.loginGroup.controls["email"].setErrors({ incorrect: true });
          } else {
            console.log(error.error.message);
          }
        }
      );
  }
  toggelPassword(evt) {
    this.hide = !this.hide;
    evt.stopPropagation();
  }
  ForgetPass() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: "673px",
      height: "513px",
      hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
