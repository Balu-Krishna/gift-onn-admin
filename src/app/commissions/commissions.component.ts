import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['coupon']);   
  }
  accept(){
    this.router.navigate(['payment-interval']);   
  }
  next(){
    this.router.navigate(['payment-interval']);   
  }

}
