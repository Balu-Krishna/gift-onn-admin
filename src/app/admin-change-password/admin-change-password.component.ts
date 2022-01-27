import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.scss']
})
export class AdminChangePasswordComponent implements OnInit {
  addAdminChangeGroup: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.addAdminChangeGroup = this.fb.group({

      oldPassword: ["*******", Validators.required],
      newPassword: ["******", Validators.required],
      confirmPassword: ["******", Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
