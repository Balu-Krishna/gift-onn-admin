import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeSuccessfulComponent } from './freeze-successful.component';

describe('FreezeSuccessfulComponent', () => {
  let component: FreezeSuccessfulComponent;
  let fixture: ComponentFixture<FreezeSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezeSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
