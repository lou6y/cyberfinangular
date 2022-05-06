import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class TreasuryService{

  constructor(private http:HttpClient){}

  getTreasuries(){
    return this.http.get('http://localhost:8083/SpringMVC/treasury/retrieve-all-treasuries');
  }




}
