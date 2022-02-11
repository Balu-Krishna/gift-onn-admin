import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { ApprovedModelComponent } from "../approved-model/approved-model.component";
import { Constants } from "../core/_config/constants";
import { ApiHttpService } from "../core/_services/app-http.service";
import { AuthenticationService } from "../core/_services/authentication.service";
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
  tableSize = 50;
  vendorList = [];
  filterText="";
  foods = [
    { value: "deny", viewValue: "Deny" },
    { value: "freeze", viewValue: "Freeze" },
    { value: "approve", viewValue: "Approve" },
    { value: "rating", viewValue: "Rating" },
  ];
  
  constructor( private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants) {}

  ngOnInit(): void {
    this.showData(1);
  }
  
  showData(page,filter?:any , searchText?: string): void {
    const url = this.constants.GET_ALL_VENDOR_TYPES;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      "pageno":page,
      "size":this.tableSize,
      "filter": filter || {
          " Locality":"",
          "Managername":"",
          "StoreId":"" ,
          "Status":"",
      },
      "searchText":this.filterText || ""
    }
    this.apiHttpService
      .post(url, body, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this. vendorList = data['data'].result;
          this.count = data["count"];
          console.log(data['data'].result)
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
  download(type) {
    const url = `${this.constants.DOWNLOAD_VENDOR_FILE}${type}`;
    
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
    }
    
  }
  addVendor() {
    this.router.navigate(["vendors/add-vendor"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "673px",
      height: "560px",
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
