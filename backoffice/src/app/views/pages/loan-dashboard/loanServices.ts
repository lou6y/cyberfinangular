import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  readonly API_URL ='http://localhost:8081';
  constructor(private httpClient: HttpClient){}

 getAllLoan(): Observable<any>{
   return this.httpClient.get(`${this.API_URL}/getAllLoans`)
 }

 getLoanById(){
  return this.httpClient.get(`${this.API_URL}/retrieve-laon/{idloan}`)
}

 addLoan(Loan:any){
   return this.httpClient.post(`${this.API_URL}/add-loan`,Loan)
 }

 editLoan(Loan:any){
   return this.httpClient.put(`${this.API_URL}/modifyloan`, Loan)

 }
 deleteLoan(idLoan:any){
   return this.httpClient.delete(`${this.API_URL}/remove-loan/${idLoan}`)
 }

 getScore(RUOUL:any,Age:any,deptratio:any,monthlyIncome:any,NOOCLAL:any,NRELOL:any,NOD:any){

  return this.httpClient.post<any>(`${this.API_URL}/score?usageCreditCard=${RUOUL}&age=${Age}&DebtRatio=${deptratio}&MonthlyIncome=${monthlyIncome}&NumberOfOpenCreditLinesAndLoans=${NOOCLAL}&NumberRealEstateLoansOrLines=${NRELOL}&NumberOfDependents=${NOD}`,null);
 }

 simulator(amount:any,duration:any,interest:any,grace:any,rembour:any){
   return this.httpClient.post(`${this.API_URL}/simulator?montant=${amount}&duree=${duration}&interet=5&grace=${grace}&rembour=${rembour}`,null);
 }

 getloansbymonth(): Observable<any>{
  return this.httpClient.get(`${this.API_URL}/getLoansByMonth`)
}




}
