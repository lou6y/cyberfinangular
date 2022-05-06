import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAssistantBotComponent } from './loan-assistant-bot.component';

describe('LoanAssistantBotComponent', () => {
  let component: LoanAssistantBotComponent;
  let fixture: ComponentFixture<LoanAssistantBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAssistantBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAssistantBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
