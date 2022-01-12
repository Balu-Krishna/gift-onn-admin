import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezedModelComponent } from "../freezed-model/freezed-model.component";
import { SuccessfulModelComponent } from "../successful-model/successful-model.component";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  products = [
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Pending",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Pending",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Pending",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Pending",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Pending",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
    {
      name: "Lorme",
      storeName: "Joyalukkas",
      productId: "JOY1234",
      category: "Jewellery",
      subCategory: "Ring",
      gender: "Female",
      description: "Description",
      price: "1000",
      taxes: "100",
      totalPrice: "1100",
      noOfUnits: "30",
      status: "Approve",
      image: "../../../../assets/gift.jpeg",
      video: "https://www.youtube.com/embed/n2Tl_eECPIM",
    },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  addProduct() {
    this.router.navigate(["add-product"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "product" },
    });
  }
  approveProduct(product) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(product) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "50%",
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
