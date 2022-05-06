import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAssociationComponent } from './payment-association.component';

describe('PaymentAssociationComponent', () => {
  let component: PaymentAssociationComponent;
  let fixture: ComponentFixture<PaymentAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
