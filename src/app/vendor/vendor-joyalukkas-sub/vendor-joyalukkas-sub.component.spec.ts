import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorJoyalukkasSubComponent } from './vendor-joyalukkas-sub.component';

describe('VendorJoyalukkasSubComponent', () => {
  let component: VendorJoyalukkasSubComponent;
  let fixture: ComponentFixture<VendorJoyalukkasSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorJoyalukkasSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorJoyalukkasSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
