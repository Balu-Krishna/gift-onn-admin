import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeCategoryComponent } from './freeze-category.component';

describe('FreezeCategoryComponent', () => {
  let component: FreezeCategoryComponent;
  let fixture: ComponentFixture<FreezeCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezeCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
