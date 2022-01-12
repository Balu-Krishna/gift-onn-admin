import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnersComponent } from "./partners.component";
import { AddPartnersComponent } from "./add-partners/add-partners.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: PartnersComponent },
  { path: "add-partner", component: AddPartnersComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
})
export class PartnersModule {}
