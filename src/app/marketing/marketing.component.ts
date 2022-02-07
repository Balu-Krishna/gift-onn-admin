import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { DenyPromotionComponent } from "../deny-promotion/deny-promotion.component";
import { FilterComponent } from "../filter/filter.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
import { ViewPromotionDetailsComponent } from "../view-promotion-details/view-promotion-details.component";

@Component({
  selector: "app-marketing",
  templateUrl: "./marketing.component.html",
  styleUrls: ["./marketing.component.scss"],
})
export class MarketingComponent implements OnInit {
  promotionsPage = 1;
  promotionsCount = 12;
  productsPage = 1;
  productsCount = 12;
  tableSize = 4;
  promotions = [];
  products = [];
  productLaunchSelected: boolean;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.promotions = [
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "pending",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "pending",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "pending",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "pending",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
      {
        promoImage: "assets/gift.jpeg",
        promoId: "89766",
        storeId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        name: "Weekend sale",
        description: "Test description description",
        startDate: "01/12/2021",
        endDate: "04/12/2021",
        status: "Approved",
      },
    ];
    this.products = [
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        partnerId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "pending",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        partnerId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "pending",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        partnerId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "pending",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        partnerId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "pending",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
      {
        productImage: "assets/gift.jpeg",
        productId: "89766",
        vendorId: "JOY123",
        category: "Jewellery",
        subCategory: "Bracelet",
        country: "India",
        description: "Test description description",
        location: "Hyderabad",
        launchDate: "01/12/2021",
        status: "Approved",
      },
    ];
  }
  productsPageChange(event) {
    this.productsPage = event;
    this.showData();
  }
  promotionsPageChange(event) {
    this.promotionsPage = event;
    this.showData();
  }
  myTabSelectedTabChange(event) {
    console.log(event);
    if (event.index === 1) {
      this.productLaunchSelected = !this.productLaunchSelected;
    } else {
      this.productLaunchSelected = !this.productLaunchSelected;
    }
  }
  openFilter() {
    let type = this.productLaunchSelected ? "productLaunch" : "promotion";
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "620px",
      data: { filterType: type },
    });
  }

  addProductLaunch() {
    this.router.navigate(["marketing/add-product-launch"]);
  }
  denyPromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Deny", type: "promotion", data: promotion },
    });
  }
  viewPromotion(promotion) {
    const dialogRef = this.dialog.open(ViewPromotionDetailsComponent, {
      width: "673px",
      height: "513px",
      data: promotion,
    });
  }
  activePromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Activate", type: "promotion", data: promotion },
    });
  }
  inactivePromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "In-Activate", type: "promotion", data: promotion },
    });
  }
  approvePromotion(promotion) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "promotion",
    });
  }
  holdPromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Hold", type: "promotion", data: promotion },
    });
  }
  denyProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Deny", type: "product Launch", data: productLaunch },
    });
  }
  activeProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Activate", type: "product Launch", data: productLaunch },
    });
  }
  inactiveProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: {
        name: "In-Activate",
        type: "product Launch",
        data: productLaunch,
      },
    });
  }
  approveProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "productLauncher",
    });
  }
  holdProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Hold", type: "product Launch", data: productLaunch },
    });
  }
  action(value) {
    console.log(value);
    if (value == "deny") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "330px",
        height: "246px",
        data: "promotion",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "denyPL") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "330px",
        height: "246px",
        data: "productLauncher",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approve") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "330px",
        height: "246px",
        data: "promotion",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approvePL") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "330px",
        height: "246px",
        data: "productLauncher",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
