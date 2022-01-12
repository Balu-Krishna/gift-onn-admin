import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RewardCategoriesComponent } from '../reward-categories/reward-categories.component';

import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";

@Component({
  selector: 'app-loyailty',
  templateUrl: './loyailty.component.html',
  styleUrls: ['./loyailty.component.scss']
})
export class LoyailtyComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  action() {
    const dialogRef = this.dialog.open(RewardCategoriesComponent, {
      width: "50%"
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addLoyalty() {
    this.router.navigate(['add-loyalty']);
  }

  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "loyaltyForm" },
    });
  }
  approveProduct(loyaltyForm) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "loyaltyForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(loyaltyForm) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "50%",
      data: "loyaltyForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

