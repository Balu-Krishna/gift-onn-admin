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
    this.router.navigate(["qr-redemption"]);
  }
  accept() {
    this.router.navigate(["vendor-taxes"]);
  }
  next() {
    this.router.navigate(["vendor-taxes"]);
  }
}
