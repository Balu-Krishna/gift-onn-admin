import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";

@Component({
  selector: "app-purchasers-order",
  templateUrl: "./purchasers-order.component.html",
  styleUrls: ["./purchasers-order.component.scss"],
})
export class PurchasersOrderComponent implements OnInit {
  Orders = [
    {
      orderId: "test",
      customerId: "test",
      storeId: "test",
      purchasername: "test",
      category: "test",
      subCategory: "test",
      productId: "test",
      productName: "test",
      netPrice: "test",
      totalPrice: "test",
      status: "Pending",
    },
    {
      orderId: "test",
      customerId: "test",
      storeId: "test",
      purchasername: "test",
      category: "test",
      subCategory: "test",
      productId: "test",
      productName: "test",
      netPrice: "test",
      totalPrice: "test",
      status: "Refunded",
    },
    {
      orderId: "test",
      customerId: "test",
      storeId: "test",
      purchasername: "test",
      category: "test",
      subCategory: "test",
      productId: "test",
      productName: "test",
      netPrice: "test",
      totalPrice: "test",
      status: "Confirmed",
    },
    {
      orderId: "test",
      customerId: "test",
      storeId: "test",
      purchasername: "test",
      category: "test",
      subCategory: "test",
      productId: "test",
      productName: "test",
      netPrice: "test",
      totalPrice: "test",
      status: "Cancelled",
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  action(value) {
    console.log(value);
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "purchasersOrder",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approve") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "30%",
        data: "purchasersOrder",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
