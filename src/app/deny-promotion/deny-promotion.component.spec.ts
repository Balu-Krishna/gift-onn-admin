import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyPromotionComponent } from './deny-promotion.component';

describe('DenyPromotionComponent', () => {
  let component: DenyPromotionComponent;
  let fixture: ComponentFixture<DenyPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
