import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerComponent } from "./customer/customer.component";
import { SuccessfulModelComponent } from "./successful-model/successful-model.component";
import { DeleteModelComponent } from "./delete-model/delete-model.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { LoyailtyComponent } from "./loyailty/loyailty.component";
import { PaymentsComponent } from "./payments/payments.component";
import { OffersComponent } from "./offers/offers.component";
import { PurchasersOrderComponent } from "./purchasers-order/purchasers-order.component";
import { CustomersSupportComponent } from "./customers-support/customers-support.component";
import { FreezedModelComponent } from "./freezed-model/freezed-model.component";
import { RatingForCustomerComponent } from "./rating-for-customer/rating-for-customer.component";
import { AddOffersComponent } from "./add-offers/add-offers.component";
import { AddLoyaltyComponent } from "./add-loyalty/add-loyalty.component";
import { VenderOrderComponent } from "./vender-order/vender-order.component";
import { DenyProductComponent } from "./deny-product/deny-product.component";
import { RewardCategoriesComponent } from "./reward-categories/reward-categories.component";
import { AddLanguageComponent } from "./add-language/add-language.component";
import { VendorPoliciesComponent } from "./vendor-policies/vendor-policies.component";
import { CustomerPoliciesComponent } from "./customer-policies/customer-policies.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddESignatureComponent } from "./add-e-signature/add-e-signature.component";
const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  {
    path: "user-pages",
    loadChildren: () =>
      import("./user-pages/user-pages.module").then((m) => m.UserPagesModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "vendors",
    loadChildren: () =>
      import("./vendor/vendor.module").then((m) => m.VendorModule),
  },
  {
    path: "products",
    loadChildren: () =>
      import("./product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "partners",
    loadChildren: () =>
      import("./partners/partners.module").then((m) => m.PartnersModule),
  },
  {
    path: "marketing",
    loadChildren: () =>
      import("./marketing/marketing.module").then((m) => m.MarketingModule),
  },
  { path: "dashboard", component: DashboardComponent },
  { path: "customers", component: CustomerComponent },
  { path: "add-successful", component: SuccessfulModelComponent },
  { path: "delete-successful", component: DeleteModelComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "venderOrder", component: VenderOrderComponent },
  { path: "loyalty", component: LoyailtyComponent },
  { path: "Payments", component: PaymentsComponent },
  { path: "offers", component: OffersComponent },
  { path: "purchasersOrder", component: PurchasersOrderComponent },
  { path: "customersSupport", component: CustomersSupportComponent },
  { path: "freezed", component: FreezedModelComponent },
  { path: "ratingForCustomer", component: RatingForCustomerComponent },
  { path: "add-offers", component: AddOffersComponent },
  { path: "add-loyalty", component: AddLoyaltyComponent },
  { path: "deny-product", component: DenyProductComponent },
  { path: "reward-categories", component: RewardCategoriesComponent },
  { path: "add-language", component: AddLanguageComponent },
  { path: "vendor-policies", component: VendorPoliciesComponent },
  { path: "customer-policies", component: CustomerPoliciesComponent },
  { path: "terms-conditions", component: TermsConditionsComponent },
  { path: "about-us", component: AboutUsComponent },
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
