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
  page = 1;
  count = 12;
  tableSize = 4;
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

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.loyalities = [
      {
        purchaserName: "test1",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test2",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test3",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test4",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test5",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test6",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test7",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test8",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test9",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test10",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test11",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
      {
        purchaserName: "test12",
        productId: "test",
        rewardType: "test",
        amount: "test",
        points: "test",
        currencyCode: "test",
        endDate: "test",
        earnPoints: "test",
      },
    ];
  }
  pageChange(event) {
    this.page = event;
    this.showData();
  }
  action() {
    const dialogRef = this.dialog.open(RewardCategoriesComponent, {
      width: "50%",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "loyaltyForm" },
    });
  }
  addLoyalty() {
    this.router.navigate(["loyalty/add-loyalty"]);
  }
}
