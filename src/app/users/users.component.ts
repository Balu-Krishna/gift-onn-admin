import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { data } from "jquery";
import { first } from "rxjs/operators";
import { Constants } from "../core/_config/constants";
import { ApiHttpService } from "../core/_services/app-http.service";
import { AuthenticationService } from "../core/_services/authentication.service";
import { DeleteModelComponent } from "../delete-model/delete-model.component";
import { FilterComponent } from "../filter/filter.component";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  page = 1;
  count = 12;
  tableSize = 50;
  userData = [];
  filterText="";
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {}

  ngOnInit(): void {
    this.showData(1);
  }
  showData(page,filter?:any , searchText?: string): void {
    const url = this.constants.GET_ALL_USER_TYPES;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      "pageno":page,
      "size":this.tableSize,
      "filter": filter || {
          "role":"",
          "department":"",
          "status":"" 
      },
      "searchText":this.filterText || ""
    }
    this.apiHttpService
      .post(url, body, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this.userData = data['data'].data;
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
  addUser() {
    this.router.navigate(["users/add-user"]);
  }
  editUser(user) {
    console.log(user._id);
    this.router.navigate(["users/edit-user", user._id]);
  }
  download(type) {
    const url = `${this.constants.DOWNLOAD_USER_FILE}${type}`;
    
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
  deleteModel(user) {
    const url = `${this.constants.DELETE_USER}${user._id}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    // this.addAdminGroup.removeControl('confirm');
    this.apiHttpService
      .delete(url, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          this.showData(1);
          const dialogRef = this.dialog.open(DeleteModelComponent, {
            width: "330px",
            height: "246px",
            data: "user",
          });
          
          dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
          });
          console.log(data);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
    
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "700px",
      height: "545px",
      data: { filterType: "user" },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showData(1, result)
    });
  }
}
