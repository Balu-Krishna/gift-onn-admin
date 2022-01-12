import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyailtyComponent } from './loyailty.component';

describe('LoyailtyComponent', () => {
  let component: LoyailtyComponent;
  let fixture: ComponentFixture<LoyailtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyailtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyailtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
