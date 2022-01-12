import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnProductsComponent } from './on-products.component';

describe('OnProductsComponent', () => {
  let component: OnProductsComponent;
  let fixture: ComponentFixture<OnProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
