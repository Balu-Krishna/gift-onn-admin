import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit {
  vendors = [
    {
      storeId: "Test",
      customerId: "Test",
      orderId: "Test",
      productId: "Test",
      vendor: "Test",
      total: "Test",
      toVendor: "Test",
      due: "Test",
      discountPrice: "Test",
      netSales: "Test",
      date: "Test",
    },
  ];
  partners = [
    {
      storeId: "Test",
      customerId: "Test",
      orderId: "Test",
      productId: "Test",
      partnerId: "test",
      total: "Test",
      toVendor: "Test",
      due: "Test",
      discountPrice: "Test",
      netSales: "Test",
      date: "Test",
    },
  ];
  activeTabIndex = 0;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  tabChange(event) {
    console.log(event.index);
    this.activeTabIndex = event.index;
  }
  openFilter() {
    let type = this.activeTabIndex === 0 ? "vendorPayment" : "partnerPayment";
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: type },
    });
  }
}
