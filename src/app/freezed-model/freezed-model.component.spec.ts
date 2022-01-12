import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezedModelComponent } from './freezed-model.component';

describe('FreezedModelComponent', () => {
  let component: FreezedModelComponent;
  let fixture: ComponentFixture<FreezedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezedModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
