import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './pages/loan/loan.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { RequetLoanComponent } from './pages/requet-loan/requet-loan.component';
import { LoanSimulatorComponent } from './pages/loan-simulator/loan-simulator.component';
import { MyloanRequestsComponent } from './pages/myloan-requests/myloan-requests.component';
import { LoanAssistantBotComponent } from './pages/loan-assistant-bot/loan-assistant-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    FooterComponent,
    NavbarComponent,
    RequetLoanComponent,
    LoanSimulatorComponent,
    MyloanRequestsComponent,
    LoanAssistantBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
