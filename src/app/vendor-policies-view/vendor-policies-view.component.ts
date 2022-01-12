import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-policies-view',
  templateUrl: './vendor-policies-view.component.html',
  styleUrls: ['./vendor-policies-view.component.scss']
})
export class VendorPoliciesViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  accept(){
    this.router.navigate(['terms-conditions-view']);   
  }
  next(){
    this.router.navigate(['terms-conditions-view']);   
  }

}
