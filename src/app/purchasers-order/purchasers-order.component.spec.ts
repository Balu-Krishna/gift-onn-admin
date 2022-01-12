import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasersOrderComponent } from './purchasers-order.component';

describe('PurchasersOrderComponent', () => {
  let component: PurchasersOrderComponent;
  let fixture: ComponentFixture<PurchasersOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasersOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasersOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
