import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { DenyPromotionComponent } from "../deny-promotion/deny-promotion.component";
import { FilterComponent } from "../filter/filter.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
import { ViewProductLaunchDetailsComponent } from "./view-product-launch-details/view-product-launch-details.component";
import { ViewPromotionDetailsComponent } from "./view-promotion-details/view-promotion-details.component";

@Component({
  selector: "app-marketing",
  templateUrl: "./marketing.component.html",
  styleUrls: ["./marketing.component.scss"],
})
export class MarketingComponent implements OnInit {
  promotions = [
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
  ];
  products = [
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
      startDate: "01/12/2021",
      status: "pending",
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
      startDate: "01/12/2021",
      status: "Approved",
    },
  ];
  productLaunchSelected: boolean;
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  tabChange(event) {
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
      width: "50%",
      data: { filterType: type },
    });
  }
  viewPromotionDetails(promotion) {
    const dialogRef = this.dialog.open(ViewPromotionDetailsComponent, {
      width: "60%",
      height: "70%",
      data: promotion,
    });
  }
  viewProductLaunchDetails(product) {
    const dialogRef = this.dialog.open(ViewProductLaunchDetailsComponent, {
      width: "60%",
      height: "70%",
      data: product,
    });
  }
  addProductLaunch() {
    this.router.navigate(["marketing/add-product-launch"]);
  }
  denyPromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "promotion", data: promotion },
    });
  }

  activePromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: {
        name: "Activate",
        type: "promotion",
        data: promotion,
      },
    });
  }
  inactivePromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: {
        name: "In-Activate",
        type: "promotion",
        data: promotion,
      },
    });
  }
  approvePromotion(promotion) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "promotion",
    });
  }
  holdPromotion(promotion) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Hold", type: "promotion", data: promotion },
    });
  }
  denyProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "product Launch", data: productLaunch },
    });
  }
  activeProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: {
        name: "Activate",
        type: "product Launch",
        data: productLaunch,
      },
    });
  }
  inactiveProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: {
        name: "In-Activate",
        type: "product Launch",
        data: productLaunch,
      },
    });
  }
  approveProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "productLauncher",
    });
  }
  holdProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Hold", type: "product Launch", data: productLaunch },
    });
  }
}
