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
  userData = [
    {
      empid: 1,
      lastName: "Nallamothu",
      firstName: "Sudharshan",
      role: "IT",
      status: "ACTIVE",
      email: "sudharshan.nallamothu@oracle.com",
    },
    {
      empid: 1,
      lastName: "Nallamothu",
      firstName: "Sudharshan",
      role: "IT",
      status: "ACTIVE",
      email: "sudharshan.nallamothu@oracle.com",
    },
    {
      empid: 1,
      lastName: "Nallamothu",
      firstName: "Sudharshan",
      role: "IT",
      status: "ACTIVE",
      email: "sudharshan.nallamothu@oracle.com",
    },
    {
      empid: 1,
      lastName: "Nallamothu",
      firstName: "Sudharshan",
      role: "IT",
      status: "IN-ACTIVE",
      email: "sudharshan.nallamothu@oracle.com",
    },
  ];
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addUser() {
    this.router.navigate(["add-user"]);
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
      data: "user",
    });
  }
}
