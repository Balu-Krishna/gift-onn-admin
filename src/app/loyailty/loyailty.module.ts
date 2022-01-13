import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddLoyaltyComponent } from "./add-loyalty/add-loyalty.component";
import { LoyailtyComponent } from "./loyailty.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
  { path: "", component: LoyailtyComponent },
  { path: "add-loyalty", component: AddLoyaltyComponent },
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

  declarations: [AddLoyaltyComponent],
})
export class LoyailtyModule {}
