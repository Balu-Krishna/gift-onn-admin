import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductLaunchDetailsComponent } from './view-product-launch-details.component';

describe('ViewProductLaunchDetailsComponent', () => {
  let component: ViewProductLaunchDetailsComponent;
  let fixture: ComponentFixture<ViewProductLaunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductLaunchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductLaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
