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
  page = 1;
  count = 12;
  tableSize = 4;
  products = [];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.products = [
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
        image: "../../assets/gift.jpeg",
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
        status: "Approved",
        image: "../../assets/gift.jpeg",
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
        status: "Denied",
        image: "../../assets/gift.jpeg",
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
        image: "../../assets/gift.jpeg",
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
        status: "Approved",
        image: "../../assets/gift.jpeg",
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
        status: "Denied",
        image: "../../assets/gift.jpeg",
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
        status: "Approved",
        image: "../../assets/gift.jpeg",
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
        status: "Denied",
        image: "../../assets/gift.jpeg",
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
        status: "Approved",
        image: "../../assets/gift.jpeg",
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
        status: "Denied",
        image: "../../assets/gift.jpeg",
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
        status: "Approved",
        image: "../../assets/gift.jpeg",
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
        status: "Denied",
        image: "../../assets/gift.jpeg",
        video: "https://www.youtube.com/embed/n2Tl_eECPIM",
      },
    ];
  }
  pageChange(event) {
    this.page = event;
    this.showData();
  }
  addProduct() {
    this.router.navigate(["products/add-product"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "620px",
      data: { filterType: "product" },
    });
  }
  approveProduct(product) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(product) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "673px",
      height: "513px",
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
