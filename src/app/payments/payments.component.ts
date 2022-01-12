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
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      vendor: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
    {
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      vendor: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
    {
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      vendor: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
  ];
  partners = [
    {
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      partnerId: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
    {
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      partnerId: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
    {
      storeId: "21545",
      customerId: "Sai135",
      orderId: "bra122",
      productId: "bra13234",
      partnerId: "joyalukkas",
      total: "15000",
      toVendor: "14000",
      due: "14000",
      discountPrice: "0.00",
      netSales: "2000",
      date: "10/12/2021",
    },
  ];
  activeTabIndex = 0;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void { }
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

