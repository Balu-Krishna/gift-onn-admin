import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PromotionsActionsComponent} from "./promotions-actions.component";

describe('PromotionsActionsComponent', () => {
  let component: PromotionsActionsComponent;
  let fixture: ComponentFixture<PromotionsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
