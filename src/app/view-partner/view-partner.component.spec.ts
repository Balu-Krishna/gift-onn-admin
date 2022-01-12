import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartnerComponent } from './view-partner.component';

describe('ViewPartnerComponent', () => {
  let component: ViewPartnerComponent;
  let fixture: ComponentFixture<ViewPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
