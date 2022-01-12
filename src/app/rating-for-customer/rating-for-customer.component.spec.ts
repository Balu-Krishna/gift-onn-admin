import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingForCustomerComponent } from './rating-for-customer.component';

describe('RatingForCustomerComponent', () => {
  let component: RatingForCustomerComponent;
  let fixture: ComponentFixture<RatingForCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingForCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingForCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
