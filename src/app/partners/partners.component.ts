import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { DenyProductComponent } from "../deny-product/deny-product.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";
import { RatingForCustomerComponent } from "../rating-for-customer/rating-for-customer.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";
import { ViewPartnerComponent } from "../view-partner/view-partner.component";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent implements OnInit {
  patners = [
    {
      logo: "assets/gift.jpeg",
      partnerName: "Apple",
      partnerId: "Ap1231",
      partnerEmailId: "apple@gmail.com",
      category: "Electronics",
      subCategory: "iPhone12 mini",
      country: "india",
      location: "Hyderabad",
      rating: "4.3",
      status: "Approved",
      contactNumber: "1234567890",
      state: "Telangana",
      address: "Hyderabad,Telangana,50054",
    },
    {
      logo: "assets/gift.jpeg",
      partnerName: "Apple",
      partnerId: "Ap1232",
      partnerEmailId: "apple@gmail.com",
      category: "Electronics",
      subCategory: "iPhone12 mini",
      country: "india",
      location: "Hyderabad",
      rating: "4.3",
      status: "Pending",
      contactNumber: "1234567890",
      state: "Telangana",
      address: "Hyderabad,Telangana,50054",
    },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  addPartner() {
    this.router.navigate(["partners/add-partner"]);
  }
  viewPartner(partner) {
    const dialogRef = this.dialog.open(ViewPartnerComponent, {
      width: "70%",
      height: "80%",
      data: partner,
    });
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "partner" },
    });
  }
  approvePatner(partner) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "partner",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  freezePatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Freeze", type: "partner", data: partner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyPatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Denay", type: "partner", data: partner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ratingPatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Rating", type: "partner", data: partner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  action(value) {
    console.log(value);
    if (value == "rating") {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "deny") {
      const dialogRef = this.dialog.open(DenyProductComponent, {
        width: "50%",
        data: "partner",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
