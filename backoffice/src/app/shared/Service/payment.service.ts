import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class PaymentService{
  readonly apiServerUrl='http://localhost:8083';
  constructor(private http:HttpClient){}

  getPayments(){
    return this.http.get('http://localhost:8083/SpringMVC/payment/retrieve-all-payments');
  }

  editPayment(payment: any){
    return this.http.put('http://localhost:8083/SpringMVC/payment/modify-payment', payment);
  }




}
