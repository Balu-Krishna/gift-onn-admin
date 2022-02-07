import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { FilterComponent } from "../filter/filter.component";
import { RewardCategoriesComponent } from "../reward-categories/reward-categories.component";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit {
  page = 1;
  count = 5;
  tableSize = 4;
  languages = [];
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.showData();
  }
  showData(): void {
    this.languages = [
      {
        languageId: "Eng78945",
        name: "English",
        value: "EN",
        status: "Active",
      },
      {
        languageId: "Eng78945",
        name: "English",
        value: "EN",
        status: "In-Active",
      },
      {
        languageId: "Eng78945",
        name: "English",
        value: "EN",
        status: "In-Active",
      },
      {
        languageId: "Eng78945",
        name: "English",
        value: "EN",
        status: "Active",
      },
      {
        languageId: "Eng78945",
        name: "English",
        value: "EN",
        status: "Active",
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
      data: { filterType: "languageForm" },
    });
  }
  addLoyalty() {
    this.router.navigate(["/add-language"]);
  }
}
