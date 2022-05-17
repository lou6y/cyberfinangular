import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class association_paymentService {
  readonly API_URL = 'http://localhost:8083/SpringMVC';

  constructor(private httpClient: HttpClient) { }

  getPayments(){
    return this.httpClient.get('http://localhost:8083/SpringMVC/payement/retrieve-all-payments')
  }
  addPayment(id : any) {
    return this.httpClient.post('http://localhost:8083/SpringMVC/payement/add-payment', id)
  }
  editPayment(payment : any){
    return this.httpClient.put('http://localhost:8083/SpringMVC/payement/modify-payment', payment)
  }
  deletePayment(id : any){
    return  this.httpClient.delete('http://localhost:8083/SpringMVC/association/remove-association/${id}')
  }
  getReservationP(idA:any){
    return this.httpClient.get('http://localhost:8083/SpringMVC/payement/retrieve-all-reservation,${idA}')
  }
  addReseration(idA:any,idP:any,idC:any) {
    return this.httpClient.post('http://localhost:8083/SpringMVC/payement/add-reservation',idA,idP)
  }
  Payer(idP:any){
    return this.httpClient.post('http://localhost:8083/SpringMVC/payement/pay', idP)
  }
  Penaliser(idP:any){
    return this.httpClient.put('http://localhost:8083/SpringMVC/payement/pay', idP)
  }
  getNonPayers(){
    return this.httpClient.get('http://localhost:8083/SpringMVC/payement/harrab')
  }
  getRisqueLevel(idC:any){
    return this.httpClient.get('http://localhost:8083/SpringMVC/payement/risque',idC)
  }
  getSusceptible(){
    return this.httpClient.get('http://localhost:8083/SpringMVC/payement/suseptible')
  }

}
