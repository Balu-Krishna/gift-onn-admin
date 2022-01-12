import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoliciesComponent } from './vendor-policies.component';

describe('VendorPoliciesComponent', () => {
  let component: VendorPoliciesComponent;
  let fixture: ComponentFixture<VendorPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
