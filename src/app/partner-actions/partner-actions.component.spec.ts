import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerActionsComponent } from './partner-actions.component';

describe('PartnerActionsComponent', () => {
  let component: PartnerActionsComponent;
  let fixture: ComponentFixture<PartnerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
