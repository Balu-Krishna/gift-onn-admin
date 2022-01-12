import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";

@Component({
  selector: 'app-vender-order',
  templateUrl: './vender-order.component.html',
  styleUrls: ['./vender-order.component.scss']
})
export class VenderOrderComponent implements OnInit {
  vendorList = [
    {
      qrnumber: "21558",
      orderId: "225222",
      storeId: "55665",
      CustomerId: "85545",
      purchaserName: "Sai Krishna",
      dateTime: "12/01/2022 || 1:30",
      productId: "JOY1244",
      productName: "Bracelet",
      totalPrice: "15000",
      discount: "25%",
      netPrice: "14500",

    },
    {
      qrnumber: "21558",
      orderId: "225222",
      storeId: "55665",
      CustomerId: "85545",
      purchaserName: "Sai Krishna",
      dateTime: "12/01/2022 || 1:30",
      productId: "JOY1244",
      productName: "Bracelet",
      totalPrice: "15000",
      discount: "25%",
      netPrice: "14500",

    },
    {
      qrnumber: "21558",
      orderId: "225222",
      storeId: "55665",
      CustomerId: "85545",
      purchaserName: "Sai Krishna",
      dateTime: "12/01/2022 || 1:30",
      productId: "JOY1244",
      productName: "Bracelet",
      totalPrice: "15000",
      discount: "25%",
      netPrice: "14500",

    },]

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "vendororder" },
    });
  }
  approveProduct(vendorordeFormr) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "vendorordeForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(vendorordeForm) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "50%",
      data: "vendorordeForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

