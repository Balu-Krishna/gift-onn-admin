import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsersComponent } from "./users/users.component";
import { VendorComponent } from "./vendor/vendor.component";
import { ProductComponent } from "./product/product.component";
import { CustomerComponent } from "./customer/customer.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { SuccessfulModelComponent } from "./successful-model/successful-model.component";
import { DeleteModelComponent } from "./delete-model/delete-model.component";
import { AddPartnersComponent } from "./add-partners/add-partners.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { LoyailtyComponent } from "./loyailty/loyailty.component";
import { PaymentsComponent } from "./payments/payments.component";
import { OffersComponent } from "./offers/offers.component";
import { PurchasersOrderComponent } from "./purchasers-order/purchasers-order.component";
import { CustomersSupportComponent } from "./customers-support/customers-support.component";
import { PartnersComponent } from "./partners/partners.component";
import { FreezedModelComponent } from "./freezed-model/freezed-model.component";
import { RatingForCustomerComponent } from "./rating-for-customer/rating-for-customer.component";
import { AddOffersComponent } from "./add-offers/add-offers.component";
import { AddLoyaltyComponent } from "./add-loyalty/add-loyalty.component";
import { AddProductLaunchComponent } from "./add-product-launch/add-product-launch.component";
import { VenderOrderComponent } from "./vender-order/vender-order.component";
import { DenyProductComponent } from "./deny-product/deny-product.component";
import { RewardCategoriesComponent } from "./reward-categories/reward-categories.component";
import { AddLanguageComponent } from "./add-language/add-language.component";
import { VendorPoliciesComponent } from "./vendor-policies/vendor-policies.component";
import { CustomerPoliciesComponent } from "./customer-policies/customer-policies.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { VendorPoliciesViewComponent } from "./vendor-policies-view/vendor-policies-view.component";
import { TermsConditionsViewComponent } from "./terms-conditions-view/terms-conditions-view.component";
import { OnProductsComponent } from "./on-products/on-products.component";
import { PickUpComponent } from "./pick-up/pick-up.component";
import { QrRedemptionComponent } from "./qr-redemption/qr-redemption.component";
import { CouponComponent } from "./coupon/coupon.component";
import { PaymentIntervalsComponent } from "./payment-intervals/payment-intervals.component";
import { CommissionsComponent } from "./commissions/commissions.component";
import { AddESignatureComponent } from "./add-e-signature/add-e-signature.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { VendorTaxesComponent } from "./vendor-taxes/vendor-taxes.component";
const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "user-pages",
    loadChildren: () =>
      import("./user-pages/user-pages.module").then((m) => m.UserPagesModule),
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UsersComponent },
  { path: "vendor", component: VendorComponent },
  { path: "product", component: ProductComponent },
  { path: "customer", component: CustomerComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:userId", component: EditUserComponent },
  { path: "add-product", component: AddProductComponent },
  { path: "add-vendor", component: AddVendorComponent },
  { path: "add-successful", component: SuccessfulModelComponent },
  { path: "delete-successful", component: DeleteModelComponent },
  { path: "add-Partners", component: AddPartnersComponent },
  { path: "marketing", component: MarketingComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "venderOrder", component: VenderOrderComponent },
  { path: "loyalty", component: LoyailtyComponent },
  { path: "Payments", component: PaymentsComponent },
  { path: "offers", component: OffersComponent },
  { path: "purchasersOrder", component: PurchasersOrderComponent },
  { path: "venderOrder", component: AddVendorComponent },
  { path: "customersSupport", component: CustomersSupportComponent },
  { path: "partners", component: PartnersComponent },
  { path: "freezed", component: FreezedModelComponent },
  { path: "ratingForCustomer", component: RatingForCustomerComponent },
  { path: "add-offers", component: AddOffersComponent },
  { path: "add-loyalty", component: AddLoyaltyComponent },
  { path: "add-product-launch", component: AddProductLaunchComponent },
  { path: "deny-product", component: DenyProductComponent },
  { path: "reward-categories", component: RewardCategoriesComponent },
  { path: "add-language", component: AddLanguageComponent },
  { path: "vendor-policies", component: VendorPoliciesComponent },
  { path: "customer-policies", component: CustomerPoliciesComponent },
  { path: "terms-conditions", component: TermsConditionsComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "vendor-policies-view", component: VendorPoliciesViewComponent },
  { path: "terms-conditions-view", component: TermsConditionsViewComponent },
  { path: "onProduct-view", component: OnProductsComponent },
  { path: "pick-up", component: PickUpComponent },
  { path: "qr-redemption", component: QrRedemptionComponent },
  { path: "vendor-taxes", component: VendorTaxesComponent },
  { path: "commission", component: CommissionsComponent },
  { path: "coupon", component: CouponComponent },
  { path: "payment-interval", component: PaymentIntervalsComponent },
  { path: "add-e-signature", component: AddESignatureComponent },
  {
    path: "basic-ui",
    loadChildren: () =>
      import("./basic-ui/basic-ui.module").then((m) => m.BasicUiModule),
  },
  {
    path: "charts",
    loadChildren: () =>
      import("./charts/charts.module").then((m) => m.ChartsDemoModule),
  },
  {
    path: "forms",
    loadChildren: () => import("./forms/form.module").then((m) => m.FormModule),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
  },
  {
    path: "icons",
    loadChildren: () =>
      import("./icons/icons.module").then((m) => m.IconsModule),
  },
  {
    path: "general-pages",
    loadChildren: () =>
      import("./general-pages/general-pages.module").then(
        (m) => m.GeneralPagesModule
      ),
  },
  {
    path: "apps",
    loadChildren: () => import("./apps/apps.module").then((m) => m.AppsModule),
  },

  {
    path: "error-pages",
    loadChildren: () =>
      import("./error-pages/error-pages.module").then(
        (m) => m.ErrorPagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
