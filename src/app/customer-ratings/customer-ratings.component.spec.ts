import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRatingsComponent } from './customer-ratings.component';

describe('CustomerRatingsComponent', () => {
  let component: CustomerRatingsComponent;
  let fixture: ComponentFixture<CustomerRatingsComponent>;
  CustomerRatingsComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRatingsComponent ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
