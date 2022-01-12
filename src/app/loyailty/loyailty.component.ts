import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { RewardCategoriesComponent } from '../reward-categories/reward-categories.component';

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
}
