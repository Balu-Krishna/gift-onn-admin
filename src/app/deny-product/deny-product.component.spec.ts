import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyProductComponent } from './deny-product.component';

describe('DenyProductComponent', () => {
  let component: DenyProductComponent;
  let fixture: ComponentFixture<DenyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
