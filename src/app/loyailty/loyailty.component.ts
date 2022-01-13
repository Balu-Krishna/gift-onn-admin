import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FilterComponent } from "../filter/filter.component";
import { RewardCategoriesComponent } from "../reward-categories/reward-categories.component";

@Component({
  selector: "app-loyailty",
  templateUrl: "./loyailty.component.html",
  styleUrls: ["./loyailty.component.scss"],
})
export class LoyailtyComponent implements OnInit {
  loyalities = [
    {
      purchaserName: "test",
      productId: "test",
      rewardType: "test",
      amount: "test",
      points: "test",
      currencyCode: "test",
      endDate: "test",
      earnPoints: "test",
    },
    {
      purchaserName: "test",
      productId: "test",
      rewardType: "test",
      amount: "test",
      points: "test",
      currencyCode: "test",
      endDate: "test",
      earnPoints: "test",
    },
  ];
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
  action() {
    const dialogRef = this.dialog.open(RewardCategoriesComponent, {
      width: "50%",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "loyalty" },
    });
  }
  addLoyalty() {
    this.router.navigate(["loyalty/add-loyalty"]);
  }
}
