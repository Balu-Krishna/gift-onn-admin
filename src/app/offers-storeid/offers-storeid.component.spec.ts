import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersStoreidComponent } from './offers-storeid.component';

describe('OffersStoreidComponent', () => {
  let component: OffersStoreidComponent;
  let fixture: ComponentFixture<OffersStoreidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersStoreidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersStoreidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
