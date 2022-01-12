import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductLaunchComponent } from './add-product-launch.component';

describe('AddProductLaunchComponent', () => {
  let component: AddProductLaunchComponent;
  let fixture: ComponentFixture<AddProductLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
