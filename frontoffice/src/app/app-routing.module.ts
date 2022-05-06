import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAssistantBotComponent } from './pages/loan-assistant-bot/loan-assistant-bot.component';
import { LoanSimulatorComponent } from './pages/loan-simulator/loan-simulator.component';
import { LoanComponent } from './pages/loan/loan.component';
import { MyloanRequestsComponent } from './pages/myloan-requests/myloan-requests.component';
import { RequetLoanComponent } from './pages/requet-loan/requet-loan.component';

const routes: Routes = [
  { path: 'admin',  component: LoanComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'requestLoan', component:RequetLoanComponent},
  {path: 'LoanSimulator', component:LoanSimulatorComponent},
  {path: 'MyLoanRequests', component:MyloanRequestsComponent},
  {path: 'LoanAssitantBot', component:LoanAssistantBotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
