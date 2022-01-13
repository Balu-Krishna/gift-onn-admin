import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-view-product-launch-details",
  templateUrl: "./view-product-launch-details.component.html",
  styleUrls: ["./view-product-launch-details.component.scss"],
})
export class ViewProductLaunchDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewProductLaunchDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  close() {
    this.dialogRef.close();
  }
}
