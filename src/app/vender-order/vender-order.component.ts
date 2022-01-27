import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";

@Component({
  selector: "app-vender-order",
  templateUrl: "./vender-order.component.html",
  styleUrls: ["./vender-order.component.scss"],
})
export class VenderOrderComponent implements OnInit {
  qrPage = 1;
  qrCount = 12;
  couponPage = 1;
  couponCount = 12;
  tableSize = 4;
  QrList = [
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
    },
  ];
  couponList: {
    qrnumber: string;
    orderId: string;
    storeId: string;
    CustomerId: string;
    purchaserName: string;
    dateTime: string;
    productId: string;
    productName: string;
    totalPrice: string;
    discount: string;
    netPrice: string;
  }[];

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.QrList = [
      {
        qrnumber: "21548",
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
    ];
    this.couponList = [
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
    ];
  }
  qrTxnPageChange(event) {
    this.qrPage = event;
    this.showData();
  }
  couponTxnPageChange(event) {
    this.couponPage = event;
    this.showData();
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "513px",
      data: { filterType: "vendororder" },
    });
  }
  approveProduct(vendorordeFormr) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "vendorordeForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(vendorordeForm) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "673px",
      height: "513px",
      data: "vendorordeForm",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
