import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotGroup:FormGroup
  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>,private fb:FormBuilder) { 
    this.forgotGroup = this.fb.group({
      "email": ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  submitEmail(){
    this.close();
  }
  close(){
    this.dialogRef.close();
    this.forgotGroup.reset();
  }
}
