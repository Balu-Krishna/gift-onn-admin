import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { AddOffersComponent } from "./add-offers/add-offers.component";
import { OffersComponent } from "./offers.component";

const routes: Routes = [
  { path: "", component: OffersComponent },
  { path: "add-offer", component: AddOffersComponent },
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

  declarations: [AddOffersComponent],
})
export class OffersModule {}
