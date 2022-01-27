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
  page = 1;
  count = 12;
  tableSize = 4;
  customers = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.customers = [
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
  }
  pageChange(event) {
    this.page = event;
    this.showData();
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "513px",
      data: { filterType: "customer" },
    });
  }
  approveCustomer() {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "customer",
    });
  }
  freezeCustomer(customer) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Freeze", type: "customer", data: customer },
    });
    console.log("freezeVendor : " + customer.storeId);
  }
  ratingCustomer(customer) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Rating", type: "customer", data: customer },
    });
    console.log("ratingVendor : " + customer.storeId);
  }
  action(value) {
    console.log(value);
    if (value == "rating") {
      const dialogRef = this.dialog.open(RatingForCustomerComponent, {
        width: "673px",
        height: "513px",
        data: "customer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == "freeze") {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "673px",
        height: "513px",
        data: "customer",
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}

//FreezeRoleComponent
