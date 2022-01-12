import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder, private router:Router, public dialog: MatDialog) { 
    this.loginGroup = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
  }

  ngOnInit(): void {
  }
  get f() {
    return this.loginGroup.controls;
  }
  loginSubmit(){
     this.submitted = true;
    if (this.loginGroup.invalid) {
      return;
    }
    const data = {
      "email": this.loginGroup.value.email,
      "password": this.loginGroup.value.password
    }
     this.router.navigate(['dashboard']);
     console.log('this.login.value',this.loginGroup.value);
    
  }
  toggelPassword(evt){
    this.hide = !this.hide;
    evt.stopPropagation();
  }
  ForgetPass(){
    const dialogRef = this.dialog.open(ForgotPasswordComponent,{
      width:"50%",
      hasBackdrop: false,
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result}`);
     });
  }

}

