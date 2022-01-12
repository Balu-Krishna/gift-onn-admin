import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeRoleComponent } from './freeze-role.component';

describe('FreezeRoleComponent', () => {
  let component: FreezeRoleComponent;
  let fixture: ComponentFixture<FreezeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezeRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
