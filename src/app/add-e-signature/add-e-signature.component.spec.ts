import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddESignatureComponent } from './add-e-signature.component';

describe('AddESignatureComponent', () => {
  let component: AddESignatureComponent;
  let fixture: ComponentFixture<AddESignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddESignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddESignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
