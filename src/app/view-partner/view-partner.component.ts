import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-view-partner",
  templateUrl: "./view-partner.component.html",
  styleUrls: ["./view-partner.component.scss"],
})
export class ViewPartnerComponent implements OnInit {
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
