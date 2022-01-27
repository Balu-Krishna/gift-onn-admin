import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { FilterComponent } from "../filter/filter.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
import { VendorJoyalukkasSubComponent } from "./vendor-joyalukkas-sub/vendor-joyalukkas-sub.component";
@Component({
  selector: "app-vendor",
  templateUrl: "./vendor.component.html",
  styleUrls: ["./vendor.component.scss"],
})
export class VendorComponent implements OnInit {
  page = 1;
  count = 12;
  tableSize = 4;
  vendorList;
  foods = [
    { value: "deny", viewValue: "Deny" },
    { value: "freeze", viewValue: "Freeze" },
    { value: "approve", viewValue: "Approve" },
    { value: "rating", viewValue: "Rating" },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.vendorList = [
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO568",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "pending",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO569",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "approved",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO567",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "freezed",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO568",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "pending",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO569",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "approved",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO567",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "freezed",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO568",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "pending",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO569",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "approved",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO567",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "freezed",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO568",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "pending",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO569",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "approved",
      },
      {
        vendorName: "Joyalukkas",
        storeManager: "Rakesh",
        storeId: "JO567",
        storeEmail: "joyalukkas@gmail.com",
        phoneNumber: "9945912312",
        location: "Hyderbad",
        status: "freezed",
      },
    ];
  }
  pageChange(event) {
    this.page = event;
    this.showData();
  }
  addVendor() {
    this.router.navigate(["vendors/add-vendor"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "513px",
      data: { filterType: "vendor" },
    });
  }
  denyVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Deny", type: "vendor", data: vendor },
    });
    console.log("denyVendor : " + vendor.storeId);
  }
  freezeVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Freeze", type: "vendor", data: vendor },
    });
    console.log("freezeVendor : " + vendor.storeId);
  }
  approveVendor(vendor) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "vendor",
    });
  }
  viewPromotion(promotion) {
    const dialogRef = this.dialog.open(VendorJoyalukkasSubComponent, {
      width: "673px",
      height: "513px",
      data: promotion,
    });
  }
  ratingVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Rating", type: "vendor", data: vendor },
    });
    console.log("ratingVendor : " + vendor.storeId);
  }
}
