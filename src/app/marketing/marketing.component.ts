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
  ];
  productLaunchSelected: boolean;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void { }
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
      width: "50%",
      data: { filterType: type },
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
  viewPromotion(promotion) {
    const dialogRef = this.dialog.open(ViewPromotionDetailsComponent, {
      width: "60%",
      height: "70%",
      data: promotion,
    });
  }
  activePromotion(promotion) { }
  inactivePromotion(promotion) { }
  approvePromotion(promotion) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "promotion",
    });
  }
  holdPromotion(promotion) { }
  denyProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "productLaunch", data: productLaunch },
    });
  }
  activeProductLaunch(productLaunch) { }
  inactiveProductLaunch(productLaunch) { }
  approveProductLaunch(productLaunch) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "productLauncher",
    });
  }
  holdProductLaunch(productLaunch) { }
  action(value) {
    console.log(value);
    if (value == "deny") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "promotion",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "denyPL") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "productLauncher",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approve") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "30%",
        data: "promotion",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "approvePL") {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "30%",
        data: "productLauncher",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
