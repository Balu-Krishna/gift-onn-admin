import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderOrderComponent } from './vender-order.component';

describe('VenderOrderComponent', () => {
  let component: VenderOrderComponent;
  let fixture: ComponentFixture<VenderOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
