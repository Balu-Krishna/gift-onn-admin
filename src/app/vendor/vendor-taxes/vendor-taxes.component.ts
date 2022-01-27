import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vendor-taxes",
  templateUrl: "./vendor-taxes.component.html",
  styleUrls: ["./vendor-taxes.component.scss"],
})
export class VendorTaxesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/coupon"]);
  }
  accept() {
    this.router.navigate(["vendors/commission"]);
  }
  next() {
    this.router.navigate(["vendors/commission"]);
  }
}
