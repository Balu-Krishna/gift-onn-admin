import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPartnersComponent } from './onboarding-partners.component';

describe('OnboardingPartnersComponent', () => {
  let component: OnboardingPartnersComponent;
  let fixture: ComponentFixture<OnboardingPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
