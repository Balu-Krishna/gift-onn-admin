import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
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

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.userData = [
      {
        empid: 1,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 2,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 3,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 4,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "IN-ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 11,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 21,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 31,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 41,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "IN-ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 12,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 22,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 32,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
      {
        empid: 42,
        lastName: "Nallamothu",
        firstName: "Sudharshan",
        role: "IT",
        status: "IN-ACTIVE",
        email: "sudharshan.nallamothu@oracle.com",
      },
    ];
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
      width: "25%",
      data: "user",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "user" },
    });
  }
}
