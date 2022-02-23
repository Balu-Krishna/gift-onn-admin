import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingSuccessModelComponent } from './ratings-success-model.component';

describe('RatingSuccessModelComponent', () => {
  let component: RatingSuccessModelComponent;
  let fixture: ComponentFixture<RatingSuccessModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingSuccessModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingSuccessModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
