import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { MarketingComponent } from "./marketing.component";
import { AddProductLaunchComponent } from "./add-product-launch/add-product-launch.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
  { path: "", component: MarketingComponent },
  { path: "add-product-launch", component: AddProductLaunchComponent },
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

  declarations: [AddProductLaunchComponent],
})
export class MarketingModule {}
