import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { url } from "inspector";
import { filter, first } from "rxjs/operators";
import { Constants } from "../core/_config/constants";
import { ApiHttpService } from "../core/_services/app-http.service";
import { AuthenticationService } from "../core/_services/authentication.service";

@Component({
  selector: "app-view-partner",
  templateUrl: "./view-partner.component.html",
  styleUrls: ["./view-partner.component.scss"],
})
export class ViewPartnerComponent implements OnInit {
  logo = "assets/gift.jpeg";
  constructor(
    public dialogRef: MatDialogRef<ViewPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    const url = `${this.constants.VIEW_PARTNER}${this.data._id}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    
    this.apiHttpService
      .get(url, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data)
          this.data = data["data"][0];
          console.log(this.data)
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  close() {
    this.dialogRef.close();
  }
}
