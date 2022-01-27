import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnersComponent } from "./partners.component";
import { AddPartnersComponent } from "./add-partners/add-partners.component";
import { Routes, RouterModule } from "@angular/router";
import { OnboardingPartnersComponent } from './add-partners/onboarding-partners/onboarding-partners.component';

const routes: Routes = [
  { path: "", component: PartnersComponent },
  { path: "add-partner", component: AddPartnersComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [OnboardingPartnersComponent],
})
export class PartnersModule {}
