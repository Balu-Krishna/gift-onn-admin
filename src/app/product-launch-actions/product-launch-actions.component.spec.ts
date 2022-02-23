import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ProductlaunchActionsComponent} from './product-launch-actions.component';

describe('PromotionsActionsComponent', () => {
  let component: ProductlaunchActionsComponent;
  let fixture: ComponentFixture<ProductlaunchActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlaunchActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlaunchActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
