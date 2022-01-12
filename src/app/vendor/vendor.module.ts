import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VendorComponent } from "./vendor.component";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { VendorPoliciesComponent } from "../vendor-policies/vendor-policies.component";
import { VendorPoliciesViewComponent } from "./vendor-policies-view/vendor-policies-view.component";
import { TermsConditionsViewComponent } from "./terms-conditions-view/terms-conditions-view.component";
import { OnProductsComponent } from "./on-products/on-products.component";
import { PickUpComponent } from "./pick-up/pick-up.component";
import { QrRedemptionComponent } from "./qr-redemption/qr-redemption.component";
import { CouponComponent } from "./coupon/coupon.component";
import { VendorTaxesComponent } from "./vendor-taxes/vendor-taxes.component";
import { CommissionsComponent } from "./commissions/commissions.component";
import { PaymentIntervalsComponent } from "../payment-intervals/payment-intervals.component";

const routes: Routes = [
  { path: "", component: VendorComponent },
  { path: "add-vendor", component: AddVendorComponent },
  {
    path: "vendor-policies-view",
    component: VendorPoliciesViewComponent,
  },
  {
    path: "terms-conditions-view",
    component: TermsConditionsViewComponent,
  },
  {
    path: "on-product-view",
    component: OnProductsComponent,
  },
  {
    path: "pick-up",
    component: PickUpComponent,
  },
  {
    path: "qr-redemption",
    component: QrRedemptionComponent,
  },
  {
    path: "coupon",
    component: CouponComponent,
  },
  {
    path: "vendor-taxes",
    component: VendorTaxesComponent,
  },
  {
    path: "commission",
    component: CommissionsComponent,
  },
  {
    path: "payment-interval",
    component: PaymentIntervalsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AddVendorComponent,
    VendorPoliciesViewComponent,
    TermsConditionsViewComponent,
    OnProductsComponent,
    PickUpComponent,
    QrRedemptionComponent,
    CouponComponent,
    VendorTaxesComponent,
    CommissionsComponent,
    PaymentIntervalsComponent,
  ],
})
export class VendorModule {}
