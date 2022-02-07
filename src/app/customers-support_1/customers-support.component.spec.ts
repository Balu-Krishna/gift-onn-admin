import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersSupportComponent } from './customers-support.component';

describe('CustomersSupportComponent', () => {
  let component: CustomersSupportComponent;
  let fixture: ComponentFixture<CustomersSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
