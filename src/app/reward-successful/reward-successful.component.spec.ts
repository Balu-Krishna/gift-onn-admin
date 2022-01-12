import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardSuccessfulComponent } from './reward-successful.component';

describe('RewardSuccessfulComponent', () => {
  let component: RewardSuccessfulComponent;
  let fixture: ComponentFixture<RewardSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
