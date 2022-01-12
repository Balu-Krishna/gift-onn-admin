import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule, ThemeService } from "ng2-charts";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./apps/todo-list/todo/todo.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { ContentAnimateDirective } from "./shared/directives/content-animate.directive";
import { TodoListComponent } from "./apps/todo-list/todo-list.component";
import { UsersComponent } from "./users/users.component";
import { VendorComponent } from "./vendor/vendor.component";
import { ProductComponent } from "./product/product.component";
import { CustomerComponent } from "./customer/customer.component";
import { SuccessfulModelComponent } from "./successful-model/successful-model.component";
import { DeleteModelComponent } from "./delete-model/delete-model.component";
import { AddLoyaltyComponent } from "./add-loyalty/add-loyalty.component";
import { AddOffersComponent } from "./add-offers/add-offers.component";
import { AddPartnersComponent } from "./partners/add-partners/add-partners.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { CustomersSupportComponent } from "./customers-support/customers-support.component";
import { DenyPromotionComponent } from "./deny-promotion/deny-promotion.component";
import { FreezedModelComponent } from "./freezed-model/freezed-model.component";
import { LoyailtyComponent } from "./loyailty/loyailty.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { OffersComponent } from "./offers/offers.component";
import { PartnersComponent } from "./partners/partners.component";
import { PaymentsComponent } from "./payments/payments.component";
import { PurchasersOrderComponent } from "./purchasers-order/purchasers-order.component";
import { RatingForCustomerComponent } from "./rating-for-customer/rating-for-customer.component";
import { VenderOrderComponent } from "./vender-order/vender-order.component";
import { DenyProductComponent } from "./deny-product/deny-product.component";
import { ApprovedModelComponent } from "./approved-model/approved-model.component";
import { FreezeRoleComponent } from "./freeze-role/freeze-role.component";
import { RewardCategoriesComponent } from "./reward-categories/reward-categories.component";
import { RewardSuccessfulComponent } from "./reward-successful/reward-successful.component";
import { AddLanguageComponent } from "./add-language/add-language.component";
import { VendorPoliciesComponent } from "./vendor-policies/vendor-policies.component";
import { CustomerPoliciesComponent } from "./customer-policies/customer-policies.component";
import { TermsConditionsComponent } from "./terms-conditions/terms-conditions.component";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddESignatureComponent } from "./add-e-signature/add-e-signature.component";
import { MaterialModule } from "./material/material.module";
import { FilterComponent } from "./filter/filter.component";
import { VendorActionsComponent } from "./vendor-actions/vendor-actions.component";
import { ViewPartnerComponent } from "./view-partner/view-partner.component";
import { ViewPromotionDetailsComponent } from "./view-promotion-details/view-promotion-details.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    UsersComponent,
    VendorComponent,
    ProductComponent,
    CustomerComponent,
    SuccessfulModelComponent,
    DeleteModelComponent,
    AddLoyaltyComponent,
    AddOffersComponent,
    AddPartnersComponent,
    AnalyticsComponent,
    CustomersSupportComponent,
    DenyPromotionComponent,
    FreezedModelComponent,
    LoyailtyComponent,
    MarketingComponent,
    OffersComponent,
    PartnersComponent,
    PaymentsComponent,
    PurchasersOrderComponent,
    RatingForCustomerComponent,
    VenderOrderComponent,
    DenyProductComponent,
    ApprovedModelComponent,
    FreezeRoleComponent,
    RewardCategoriesComponent,
    RewardSuccessfulComponent,
    AddLanguageComponent,
    VendorPoliciesComponent,
    CustomerPoliciesComponent,
    TermsConditionsComponent,
    AboutUsComponent,
    AddESignatureComponent,
    FilterComponent,
    VendorActionsComponent,
    ViewPartnerComponent,
    ViewPromotionDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularEditorModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [AngularEditorModule],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
