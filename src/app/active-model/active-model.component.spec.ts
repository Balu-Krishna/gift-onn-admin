import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveModelComponent } from './active-model.component';

describe('ApprovedModelComponent', () => {
  let component: ActiveModelComponent;
  let fixture: ComponentFixture<ActiveModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
