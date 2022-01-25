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
  partnersPage = 1;
  partnersCount = 12;
  vendorsPage = 1;
  vendorsCount = 12;
  tableSize = 4;
  vendors = [];
  partners = [];
  activeTabIndex = 0;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.vendors = [
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
    this.partners = [
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
  }
  vendorsPageChange(event) {
    this.vendorsPage = event;
    this.showData();
  }
  partnersPageChange(event) {
    this.partnersPage = event;
    this.showData();
  }
  tabChange(event) {
    console.log(event.index);
    this.activeTabIndex = event.index;
  }
  openFilter() {
    let filterType =
      this.activeTabIndex === 0 ? "paymentVendorForm" : "paymentPartnerForm";
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: filterType },
    });
  }
}
