import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  addAdminEditGroup: FormGroup;


  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.addAdminEditGroup = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
