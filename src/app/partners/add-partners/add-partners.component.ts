import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { Constants } from "src/app/core/_config/constants";
import { ApiHttpService } from "src/app/core/_services/app-http.service";
import { AuthenticationService } from "src/app/core/_services/authentication.service";

@Component({
  selector: "app-add-partners",
  templateUrl: "./add-partners.component.html",
  styleUrls: ["./add-partners.component.scss"],
})
export class AddPartnersComponent implements OnInit {
  addPartnersGroup: FormGroup;
  submitted = false;
  countries = [];
  states=[];
  cities = [];
  categories=[];
  file;
  subcategories: [];
  partnerId = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    public apiHttpService: ApiHttpService,
    public constants: Constants
  ) {
    this.addPartnersGroup = this.fb.group({
      partnername: ["", Validators.required],
      emailid: [null, Validators.required],
      partnerid: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null, Validators.required],
      contactnumber: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      address: [null, Validators.required],
      logo: [null, Validators.required],
    });
  }
  get register() {
    return this.addPartnersGroup.controls;
  }
  ngOnInit(): void {
    const cat_url = this.constants.GET_PARTNERS_CATEGORIES;
    let cat_headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(cat_url, { headers:  cat_headers})
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          this.categories = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );

    const url = this.constants.GET_ADD_VENDOR_COUNTRY;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    this.apiHttpService
      .get(url, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          this.countries = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  countryChange(value){
    const url = this.constants.GET_ADD_VENDOR_STATE;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      id: value
    }
    this.apiHttpService
      .post(url, body, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data['data']);
          this.states = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  stateChange(value){
    const url = this.constants.GET_ADD_VENDOR_CITY;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      id: value
    }
    this.apiHttpService
      .post(url, body, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          this.cities = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  categoryChange(value) {
    const url = this.constants.GET_PARTNERS_SUB_CATEGORIES;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };
    const body = {
      categoryId: value
    }
    this.apiHttpService
      .post(url, body, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data['data']);
          this.subcategories = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  submitForm() {
    this.submitted = true;
    console.log(this.addPartnersGroup.value);
  }
  savePartner() {
    this.submitted = true;
    if(this.addPartnersGroup.invalid){
      return ;
    }
    const formData = new FormData();
    formData.append(
      "partnername",
      this.addPartnersGroup.get("partnername").value
    );
    formData.append("emailid", this.addPartnersGroup.get("emailid").value);
    formData.append("category", this.addPartnersGroup.get("category").value);
    formData.append(
      "subcategory",
      this.addPartnersGroup.get("subcategory").value
    );
    formData.append("partnerid", this.addPartnersGroup.get("partnerid").value);
    formData.append(
      "contactnumber",
      this.addPartnersGroup.get("contactnumber").value
    );
    formData.append("country", this.addPartnersGroup.get("country").value);
    formData.append("state", this.addPartnersGroup.get("state").value);
    formData.append("city", this.addPartnersGroup.get("city").value);
    formData.append("address", this.addPartnersGroup.get("address").value);
    formData.append("logo", this.file, this.file.name);
    const url = this.constants.ADD_PARTNER;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
      'Accept': 'application/json'
    };

    this.apiHttpService
      .post(url, formData, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          this.partnerId = data['data'];
        },
        (error) => {
          console.log(error.error.message);
        }
      );
  }
  cancleOnboardPartener() {
    this.addPartnersGroup.reset();
    this.router.navigate(["partners"]);
  }
  onboardPartner() {
    this.submitted = true;
    if(this.addPartnersGroup.invalid){
      return ;
    }
    if(this.partnerId.length > 0) {
      this.router.navigate(["partners/add-e-sign", this.partnerId]);
    } else {
      this.submitted = true;
    const formData = new FormData();
    formData.append(
      "partnername",
      this.addPartnersGroup.get("partnername").value
    );
    formData.append("emailid", this.addPartnersGroup.get("emailid").value);
    formData.append("category", this.addPartnersGroup.get("category").value);
    formData.append(
      "subcategory",
      this.addPartnersGroup.get("subcategory").value
    );
    formData.append("partnerid", this.addPartnersGroup.get("partnerid").value);
    formData.append(
      "contactnumber",
      this.addPartnersGroup.get("contactnumber").value
    );
    formData.append("country", this.addPartnersGroup.get("country").value);
    formData.append("state", this.addPartnersGroup.get("state").value);
    formData.append("city", this.addPartnersGroup.get("city").value);
    formData.append("address", this.addPartnersGroup.get("address").value);
    formData.append("logo", this.file, this.file.name);
    const url = this.constants.ADD_PARTNER;
    let headers = {
      Authorization: `Bearer ${this.authenticationService.currentUserValue.data.token}`,
    };

    this.apiHttpService
      .post(url, formData, { headers })
      .pipe(first())
      .subscribe(
        (data) => {
          this.partnerId = data['data'];
          this.router.navigate(["partners/add-e-sign", this.partnerId]);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
    }
    
  }
  handleChange(event: FileList) {
    this.file = event[0];
  }
  openLogoFile() {
    const input = <any>document.querySelector("#logo");
    input.click();
  }
}
