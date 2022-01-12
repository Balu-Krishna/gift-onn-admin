import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-qr-redemption",
  templateUrl: "./qr-redemption.component.html",
  styleUrls: ["./qr-redemption.component.scss"],
})
export class QrRedemptionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/pick-up"]);
  }
  accept() {
    this.router.navigate(["vendors/coupon"]);
  }
  next() {
    this.router.navigate(["vendors/coupon"]);
  }
}
