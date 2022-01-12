import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { FilterComponent } from "../filter/filter.component";
import { FreezeRoleComponent } from "../freeze-role/freeze-role.component";
import { RatingForCustomerComponent } from "../rating-for-customer/rating-for-customer.component";
import { VendorActionsComponent } from "../vendor-actions/vendor-actions.component";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  customers = [
    {
      name: "Rajesh Sharma",
      customerId: "12345",
      emailId: "test@gmail.com",
      mobileNumber: "1234567890",
      country: "India",
      location: "Hyderabad",
      dateTime: "10-12-2021",
      rating: "4.5",
      status: "pending",
    },
    {
      name: "Rajesh Sharma",
      customerId: "12345",
      emailId: "test@gmail.com",
      mobileNumber: "1234567890",
      country: "India",
      location: "Hyderabad",
      dateTime: "10-12-2021",
      rating: "4.5",
      status: "Approved",
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "customer" },
    });
  }
  approveCustomer() {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "customer",
    });
  }
  freezeCustomer(customer) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Freeze", type: "customer", data: customer },
    });
    console.log("freezeVendor : " + customer.storeId);
  }
  ratingCustomer(customer) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "50%",
      data: { name: "Rating", type: "customer", data: customer },
    });
    console.log("ratingVendor : " + customer.storeId);
  }
  action(value) {
    console.log(value);
    if (value == "rating") {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "50%",
        data: "customer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "customer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}

//FreezeRoleComponent
