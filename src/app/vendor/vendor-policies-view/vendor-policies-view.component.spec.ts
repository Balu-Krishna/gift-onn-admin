import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPoliciesViewComponent } from './vendor-policies-view.component';

describe('VendorPoliciesViewComponent', () => {
  let component: VendorPoliciesViewComponent;
  let fixture: ComponentFixture<VendorPoliciesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPoliciesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPoliciesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
