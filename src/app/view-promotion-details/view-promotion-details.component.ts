import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ViewPartnerComponent } from "../view-partner/view-partner.component";

@Component({
  selector: "app-view-promotion-details",
  templateUrl: "./view-promotion-details.component.html",
  styleUrls: ["./view-promotion-details.component.scss"],
})
export class ViewPromotionDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
  close() {
    this.dialogRef.close();
  }
}
