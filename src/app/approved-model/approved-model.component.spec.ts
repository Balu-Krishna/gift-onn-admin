import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedModelComponent } from './approved-model.component';

describe('ApprovedModelComponent', () => {
  let component: ApprovedModelComponent;
  let fixture: ComponentFixture<ApprovedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
