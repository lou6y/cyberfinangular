import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class association_paymentService {
  readonly API_URL = 'http://localhost:8083';

  constructor(private httpClient: HttpClient) { }

  getPayments(){
    return this.httpClient.get(`${this.API_URL}/CyberFin/payement/retrieve-all-payments`)
  }
  addPayment(id : any) {
    return this.httpClient.post(`${this.API_URL}/CyberFin/payement/add-payment`, id)
  }
  editPayment(payment : any){
    return this.httpClient.put(`${this.API_URL}/CyberFin/payement/modify-payment`, payment)
  }
  deletePayment(id : any){
    return  this.httpClient.delete(`${this.API_URL}/CyberFin/association/remove-association/${id}`)
  }
  getReservationP(idA:any){
    return this.httpClient.get(`${this.API_URL}/CyberFin/payement/retrieve-all-reservation,${idA}`)
  }
  addReseration(idA:any,idP:any,idC:any) {
    return this.httpClient.post(`${this.API_URL}/CyberFin/payement/add-reservation`,idA,idP)
  }
  Payer(idP:any){
    return this.httpClient.post(`${this.API_URL}/CyberFin/payement/pay`, idP)
  }
  Penaliser(idP:any){
    return this.httpClient.put(`${this.API_URL}/CyberFin/payement/pay`, idP)
  }
  getNonPayers(){
    return this.httpClient.get(`${this.API_URL}/CyberFin/payement/harrab`)
  }
  getRisqueLevel(idC:any){
    return this.httpClient.get(`${this.API_URL}/CyberFin/payement/risque`,idC)
  }
  getSusceptible(){
    return this.httpClient.get(`${this.API_URL}/CyberFin/payement/suseptible`)
  }

}
