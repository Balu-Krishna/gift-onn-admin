import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { filter, first } from "rxjs/operators";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { Constants } from "../core/_config/constants";
import { ApiHttpService } from "../core/_services/app-http.service";
import { AuthenticationService } from "../core/_services/authentication.service";
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
  page = 1;
  count = 12;
  tableSize = 4;
  patners = [];
  filterText="";
  logo = 'assets/gift.jpeg';
  constructor(private router: Router, public dialog: MatDialog, private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants) {}

  ngOnInit(): void {
    this.showData(1);
  }
  showData(page,filter?:any , searchText?: string): void {
    const url = this.constants.GET_ALL_PARTNERS;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      "pageno":page,
      "size":this.tableSize,
      "filter": filter || {
        "partnername":"",
        "partnerid":"",
        "category":"",
        "subcategory":"",
        "country":"",
        "location":"",
        "status":"" 
      },
      "searchText":this.filterText || ""
    }
    this.apiHttpService
      .post(url, body, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this.patners = data['data'].result;
          console.log(this.patners);
          this.count = data["count"];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  pageChange(event) {
    this.page = event;
    this.showData(this.page);
  }
  addPartner() {
    this.router.navigate(["partners/add-partner"]);
  }
  download(type) {
    const url = `${this.constants.DOWNLOAD_PARTNERS_FILE}${type}`;
    
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    if(type === 'csv'){
      this.apiHttpService
      .get(url, {headers, responseType: 'blob'})
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          const blob = new Blob([data], {type: 'application/octet-stream'});
          const url= window.URL.createObjectURL(blob);
          window.open(url);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else if(type === 'xls'){
      this.apiHttpService
      .get(url, {headers, responseType: 'arrayBuffer'})
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
          const url= window.URL.createObjectURL(blob);
          window.open(url);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.apiHttpService
      .get(url, {headers, responseType: 'arrayBuffer'})
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          const blob = new Blob([data], { type: 'application/pdf' });
          const url= window.URL.createObjectURL(blob);
          window.open(url);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    
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
      width: "673px",
      height: "620px",
      data: { filterType: "partner" },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showData(1, result)
    });
  }
  approvePatner(partner) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "330px",
      height: "246px",
      data: "partner",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  freezePatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Freeze", type: "partner", data: partner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyPatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
      data: { name: "Deny", type: "partner", data: partner },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ratingPatner(partner) {
    const dialogRef = this.dialog.open(VendorActionsComponent, {
      width: "673px",
      height: "513px",
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
