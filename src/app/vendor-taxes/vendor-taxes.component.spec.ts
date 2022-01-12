import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTaxesComponent } from './vendor-taxes.component';

describe('VendorTaxesComponent', () => {
  let component: VendorTaxesComponent;
  let fixture: ComponentFixture<VendorTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
