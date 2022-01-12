import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApprovedModelComponent } from '../approved-model/approved-model.component';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FilterComponent } from '../filter/filter.component';
import { FreezeRoleComponent } from '../freeze-role/freeze-role.component';
import { RatingForCustomerComponent } from '../rating-for-customer/rating-for-customer.component';
import { VendorActionsComponent } from '../vendor-actions/vendor-actions.component';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  vendorList = [
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
      status: "approved",
    },
  ];
  foods = [
    { value: "deny", viewValue: "Deny" },
    { value: "freeze", viewValue: "Freeze" },
    { value: "approve", viewValue: "Approve" },
    { value: "rating", viewValue: "Rating" },
  ];

  constructor(public dialog: MatDialog, private router: Router) { }
  addVendor() {
    this.router.navigate(["add-offers"]);
  }
  ngOnInit(): void {
  }
  action(value) {
    console.log(value)
    if (value == 'rating') {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "50%",
        data: "offer"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == 'freeze') {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "offer"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == 'deny') {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "offer"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  denyVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "vendor", data: vendor },
    });
    console.log("denyVendor : " + vendor.storeId);
  }
  freezeVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Freeze", type: "vendor", data: vendor },
    });
    console.log("freezeVendor : " + vendor.storeId);
  }
  approveVendor(vendor) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "vendor",
    });
  }
  ratingVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Rating", type: "vendor", data: vendor },
    });
    console.log("ratingVendor : " + vendor.storeId);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "offerForm" },
    });
  }
}

