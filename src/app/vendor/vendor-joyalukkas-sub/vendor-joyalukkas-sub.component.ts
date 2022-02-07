import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewPartnerComponent } from 'src/app/view-partner/view-partner.component';

@Component({
  selector: 'app-vendor-joyalukkas-sub',
  templateUrl: './vendor-joyalukkas-sub.component.html',
  styleUrls: ['./vendor-joyalukkas-sub.component.scss']
})
export class VendorJoyalukkasSubComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    console.log(this.data);
  }
  close() {
    this.dialogRef.close();
  }
}