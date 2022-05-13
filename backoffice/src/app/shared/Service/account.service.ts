import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class AccountService{
  readonly apiServerUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  getAccounts(){
    return this.http.get('http://localhost:8083/SpringMVC/account/retrieve-all-accounts');
  }

  addAccount(account: any){
    return this.http.post('http://localhost:8083/SpringMVC/account/add-account',account);
  }

  editAccount(account: any){
    return this.http.put('http://localhost:8083/SpringMVC/account/modify-account', account);
  }

  deleteAccount(accountId: any){
    return this.http.delete('http://localhost:8083/SpringMVC/account/remove-account/'+accountId);
  }



}
