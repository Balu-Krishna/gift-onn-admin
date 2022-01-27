import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.component.html",
  styleUrls: ["./coupon.component.scss"],
})
export class CouponComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/qr-redemption"]);
  }
  accept() {
    this.router.navigate(["vendors/vendor-taxes"]);
  }
  next() {
    this.router.navigate(["vendors/vendor-taxes"]);
  }
}
