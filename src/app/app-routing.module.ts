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
import { VenderOrderComponent } from "./vender-order/vender-order.component";
import { DenyProductComponent } from "./deny-product/deny-product.component";
import { RewardCategoriesComponent } from "./reward-categories/reward-categories.component";
import { AddLanguageComponent } from "./add-language/add-language.component";
import { VendorPoliciesComponent } from "./vendor-policies/vendor-policies.component";
import { CustomerPoliciesComponent } from "./customer-policies/customer-policies.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddESignatureComponent } from "./add-e-signature/add-e-signature.component";
import { OnboardingPartnersComponent } from "./partners/add-partners/onboarding-partners/onboarding-partners.component";
import { AdminEditComponent } from "./admin-edit/admin-edit.component";
import { LanguageComponent } from "./language/language.component";
import { AdminChangePasswordComponent } from "./admin-change-password/admin-change-password.component";
import { AuthGuard } from "./core/_helpers/auth.gaurd";
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
    canActivate: [AuthGuard],
  },
  {
    path: "vendors",
    loadChildren: () =>
      import("./vendor/vendor.module").then((m) => m.VendorModule),
    canActivate: [AuthGuard],
  },
  {
    path: "products",
    loadChildren: () =>
      import("./product/product.module").then((m) => m.ProductModule),
    canActivate: [AuthGuard],
  },
  {
    path: "partners",
    loadChildren: () =>
      import("./partners/partners.module").then((m) => m.PartnersModule),
    canActivate: [AuthGuard],
  },
  {
    path: "marketing",
    loadChildren: () =>
      import("./marketing/marketing.module").then((m) => m.MarketingModule),
    canActivate: [AuthGuard],
  },
  {
    path: "loyalty",
    loadChildren: () =>
      import("./loyailty/loyailty.module").then((m) => m.LoyailtyModule),
    canActivate: [AuthGuard],
  },
  {
    path: "offers",
    loadChildren: () =>
      import("./offers/offers.module").then((m) => m.OffersModule),
    canActivate: [AuthGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "customers", component: CustomerComponent, canActivate: [AuthGuard] },
  {
    path: "add-successful",
    component: SuccessfulModelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "delete-successful",
    component: DeleteModelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "analytics",
    component: AnalyticsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "venderOrder",
    component: VenderOrderComponent,
    canActivate: [AuthGuard],
  },
  { path: "Payments", component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: "offers", component: OffersComponent, canActivate: [AuthGuard] },
  {
    path: "purchasersOrder",
    component: PurchasersOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "customersSupport",
    component: CustomersSupportComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "freezed",
    component: FreezedModelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "ratingForCustomer",
    component: RatingForCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "deny-product",
    component: DenyProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "reward-categories",
    component: RewardCategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-language",
    component: AddLanguageComponent,
    canActivate: [AuthGuard],
  },
  { path: "languages", component: LanguageComponent, canActivate: [AuthGuard] },
  {
    path: "vendor-policies",
    component: VendorPoliciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "customer-policies",
    component: CustomerPoliciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "terms-conditions",
    component: TermsConditionsComponent,
    canActivate: [AuthGuard],
  },
  { path: "about-us", component: AboutUsComponent, canActivate: [AuthGuard] },
  {
    path: "add-e-signature",
    component: AddESignatureComponent,
    canActivate: [AuthGuard],
  },
  { path: "edit", component: AdminEditComponent, canActivate: [AuthGuard] },
  {
    path: "change-password",
    component: AdminChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "basic-ui",
    loadChildren: () =>
      import("./basic-ui/basic-ui.module").then((m) => m.BasicUiModule),
    canActivate: [AuthGuard],
  },
  {
    path: "charts",
    loadChildren: () =>
      import("./charts/charts.module").then((m) => m.ChartsDemoModule),
    canActivate: [AuthGuard],
  },
  {
    path: "forms",
    loadChildren: () => import("./forms/form.module").then((m) => m.FormModule),
    canActivate: [AuthGuard],
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./tables/tables.module").then((m) => m.TablesModule),
    canActivate: [AuthGuard],
  },
  {
    path: "icons",
    loadChildren: () =>
      import("./icons/icons.module").then((m) => m.IconsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "general-pages",
    loadChildren: () =>
      import("./general-pages/general-pages.module").then(
        (m) => m.GeneralPagesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "apps",
    loadChildren: () => import("./apps/apps.module").then((m) => m.AppsModule),
    canActivate: [AuthGuard],
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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
