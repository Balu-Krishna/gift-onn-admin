import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";
import { SuccessfulModelComponent } from "src/app/successful-model/successful-model.component";

@Component({
  selector: "app-onboarding-partners",
  templateUrl: "./onboarding-partners.component.html",
  styleUrls: ["./onboarding-partners.component.scss"],
})
export class OnboardingPartnersComponent implements OnInit {
  submitted = false;
  file: File;
  id: string;
  constructor(private fb: FormBuilder, public dialog: MatDialog,private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,private route: ActivatedRoute,
    public constants: Constants) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  
  openSignature() {
    const input = <any>document.querySelector("#signature");
    input.click();
  }
  handleChange(event: FileList) {
    this.file = event[0];
  }
  uploadSign(){
    const formData = new FormData();
    formData.append("esignature",this.file, this.file.name);
    const url = `${this.constants.UPLOAD_PARTNERS_SIGN}${this.id}`;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
      'Accept': 'application/json'
    };

    this.apiHttpService
      .put(url, formData, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          this.addProductSubmit();
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  addProductSubmit() {
    this.submitted = true;
    const dialogRef = this.dialog.open(SuccessfulModelComponent, {
      data: "product",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
