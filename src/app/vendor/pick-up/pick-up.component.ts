import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-pick-up",
  templateUrl: "./pick-up.component.html",
  styleUrls: ["./pick-up.component.scss"],
})
export class PickUpComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(["vendors/on-product-view"]);
  }
  accept() {
    this.router.navigate(["vendors/qr-redemption"]);
  }
  next() {
    this.router.navigate(["vendors/qr-redemption"]);
  }
}
