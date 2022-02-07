import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "add-product", component: AddProductComponent },
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

  declarations: [AddProductComponent],
})
export class ProductModule {}
