import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import {CashFLowModel, transactionObject} from "../_models/transaction";

@Injectable({
  providedIn:'root'
})
export class TransactionService{
  readonly apiServerUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  getTransactions(){
    return this.http.get('http://localhost:8083/SpringMVC/transaction/retrieve-all-transactions');
  }

  addTransaction(transaction: any){
    return this.http.post('http://localhost:8083/SpringMVC/transaction/add-transaction',transaction);
  }

  editTransaction(transaction: any){
    return this.http.put('http://localhost:8083/SpringMVC/transaction/modify-transaction', transaction);
  }

  deleteTransaction(transactionId: any){
    return this.http.delete('http://localhost:8083/SpringMVC/transaction/remove-transaction/'+transactionId);
  }

  getAccounts(){
      return this.http.get('http://localhost:8083/SpringMVC/transaction/retrieve-all-accounts');
  }

  getAccountBalance(accountID: any){
      return this.http.get('http://localhost:8083/SpringMVC/transaction/getAccountBalance'+accountID);
  }

  changeAccountBalanceById(newBalance:any , accountID:any){
      return this.http.put('http://localhost:8083/SpringMVC/transaction/changeaccountbalancebyid', +newBalance +accountID);

  }

    transactionSubject = new Subject()
    $transactionSubject = this.transactionSubject.asObservable()

    approveTransactionSubject = new Subject()
    $approveTransactionSubject = this.approveTransactionSubject.asObservable()
    sendMoneyAction(value : CashFLowModel){
        this.transactionSubject.next(value)
    }

    approveTransaction(value : transactionObject){
        this.approveTransactionSubject.next(value)
    }
    transferMoney(transfer_from: any,transfer_to:any,transfer_amount:any) {
        let body = new URLSearchParams();
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post("http://localhost:8083/SpringMVC/transaction/transfer?transfer_from="+transfer_from+"&transfer_to="+transfer_to+"&transfer_amount="+transfer_amount,body.toString(),options);
    }
    withdraw(accountid: any,withdrawal_amount:any) {
        let body = new URLSearchParams();
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post("http://localhost:8083/SpringMVC/transaction/withdraw/"+accountid+"?withdrawal_amount="+withdrawal_amount,body.toString(),options);
    }
    deposit(accountid: any,deposit_amount:any) {
        let body = new URLSearchParams();
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post("http://localhost:8083/SpringMVC/transaction/deposit/"+accountid+"?deposit_amount="+deposit_amount,body.toString(),options);
    }
    paybills(beneficiary: any,account_number:any,account_id:any,reference:any,payment_amount:any) {
        let body = new URLSearchParams();
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.http.post("http://localhost:8083/SpringMVC/transaction/payment?beneficiary="+beneficiary+"&account_number="+account_number+"&account_id="+account_id+"&reference="+reference+"&payment_amount="+payment_amount,body.toString(),options);
  }




}
