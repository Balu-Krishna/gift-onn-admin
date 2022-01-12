import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorActionsComponent } from './vendor-actions.component';

describe('VendorActionsComponent', () => {
  let component: VendorActionsComponent;
  let fixture: ComponentFixture<VendorActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
