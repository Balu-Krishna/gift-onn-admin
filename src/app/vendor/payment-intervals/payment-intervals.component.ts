import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-intervals',
  templateUrl: './payment-intervals.component.html',
  styleUrls: ['./payment-intervals.component.scss']
})
export class PaymentIntervalsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['commission']);   
  }
  accept(){
    this.router.navigate(['add-e-signature']);   
  }
  next(){
    this.router.navigate(['add-e-signature']);   
  }

}
