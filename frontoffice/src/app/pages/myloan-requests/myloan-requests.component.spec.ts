import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloanRequestsComponent } from './myloan-requests.component';

describe('MyloanRequestsComponent', () => {
  let component: MyloanRequestsComponent;
  let fixture: ComponentFixture<MyloanRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyloanRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyloanRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
