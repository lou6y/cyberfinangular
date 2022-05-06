import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetLoanComponent } from './requet-loan.component';

describe('RequetLoanComponent', () => {
  let component: RequetLoanComponent;
  let fixture: ComponentFixture<RequetLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequetLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequetLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
