import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-terms-conditions-view",
  templateUrl: "./terms-conditions-view.component.html",
  styleUrls: ["./terms-conditions-view.component.scss"],
})
export class TermsConditionsViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/vendor-policies-view"]);
  }
  accept() {
    this.router.navigate(["vendors/on-product-view"]);
  }
  next() {
    this.router.navigate(["vendors/on-product-view"]);
  }
}
