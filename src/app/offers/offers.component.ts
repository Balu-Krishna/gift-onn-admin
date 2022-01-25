import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { data } from "jquery";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";
import { OffersStoreidComponent } from "../offers-storeid/offers-storeid.component";
import { RatingForCustomerComponent } from "../rating-for-customer/rating-for-customer.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
  occasionalPage = 1;
  occasionalCount = 12;
  regularPage = 1;
  regularCount = 12;
  seasonalPage = 1;
  seasonalCount = 12;
  bankPage = 1;
  bankCount = 12;
  tableSize = 4;

  occasionalOffers = [];
  regularOffers = [];
  seasonalOffers = [];
  bankOffers = [];

  foods = [
    { value: "deny", viewValue: "Deny" },
    { value: "freeze", viewValue: "Freeze" },
    { value: "approve", viewValue: "Approve" },
    { value: "rating", viewValue: "Rating" },
  ];

  constructor(public dialog: MatDialog, private router: Router) {}
  addVendor() {
    this.router.navigate(["offers/add-offer"]);
  }
  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.occasionalOffers = [
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
    ];
    this.regularOffers = [
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
    ];
    this.seasonalOffers = [
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
    ];
    this.bankOffers = [
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "PENDING",
      },
      {
        image: "assets/gift.jpeg",
        storeId: "89736",
        offerId: "JOY873",
        category: "Jewellary",
        subCategory: "Bracelet",
        name: "Weekend Sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing",
        country: "India",
        location: "Hyderabad",
        startDate: "01/12/2021",
        endDate: "01/12/2021",
        status: "APPROVED",
      },
    ];
  }
  occasionalOffersPageChange(event) {
    this.occasionalPage = event;
    this.showData();
  }
  regularOffersPageChange(event) {
    this.regularPage = event;
    this.showData();
  }
  seasonalOffersPageChange(event) {
    this.seasonalPage = event;
    this.showData();
  }
  bankOffersPageChange(event) {
    this.bankPage = event;
    this.showData();
  }
  action(value) {
    console.log(value);
    if (value == "rating") {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "50%",
        data: "offer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "offer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "deny") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "offer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  denyVendor(vendor) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Deny", type: "vendor", data: vendor },
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
  openoffer() {
    const dialogRef = this.dialog.open(OffersStoreidComponent, {
      width: "50%",
      data: { filterType: "OffersForm" },
    });
  }
}
