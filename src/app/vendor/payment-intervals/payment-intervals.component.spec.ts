import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIntervalsComponent } from './payment-intervals.component';

describe('PaymentIntervalsComponent', () => {
  let component: PaymentIntervalsComponent;
  let fixture: ComponentFixture<PaymentIntervalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentIntervalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
