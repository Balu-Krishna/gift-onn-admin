import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
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
  tableSize = 4;
  userData = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    const url = this.constants.GET_ALL_USER_TYPES;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(url, {headers})
      .pipe(first())
      .subscribe(
        (data) => {
          this.userData = data['data'].data;
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  pageChange(event) {
    this.page = event;
    this.showData();
  }
  addUser() {
    this.router.navigate(["users/add-user"]);
  }
  editUser(user) {
    this.router.navigate(["users/edit-user", user.empid]);
  }
  download(type) {
    console.log(type);
  }
  deleteModel() {
    const dialogRef = this.dialog.open(DeleteModelComponent, {
      width: "330px",
      height: "246px",
      data: "user",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "700px",
      height: "545px",
      data: { filterType: "user" },
    });
  }
}
