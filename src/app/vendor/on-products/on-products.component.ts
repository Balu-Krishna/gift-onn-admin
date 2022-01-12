import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-on-products",
  templateUrl: "./on-products.component.html",
  styleUrls: ["./on-products.component.scss"],
})
export class OnProductsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/terms-conditions-view"]);
  }
  accept() {
    this.router.navigate(["vendors/pick-up"]);
  }
  next() {
    this.router.navigate(["vendors/pick-up"]);
  }
}
