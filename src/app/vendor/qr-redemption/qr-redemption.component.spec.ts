import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrRedemptionComponent } from './qr-redemption.component';

describe('QrRedemptionComponent', () => {
  let component: QrRedemptionComponent;
  let fixture: ComponentFixture<QrRedemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrRedemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrRedemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
