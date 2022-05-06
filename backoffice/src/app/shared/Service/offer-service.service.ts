
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../Model/offer";
@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  readonly apiServerUrl= 'http://localhost:8083';
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get ('http://localhost:8083/SpringMVC/offer/retrieveAllOffers');
  }
  findAllfeed() {
    return this.http.get ('http://localhost:8083/SpringMVC/feedback/retrieveAllFeedbacks');
  }
  add(offer:Offer) {
    return this.http.post ('http://localhost:8083/SpringMVC/offer/addOffer', offer);
  }

  update(offer: Offer) {
    return this.http.post ('http://localhost:8083/SpringMVC/offer/modifyOffer', offer);
  }

  delete(id: BigInt) {
    return this.http.delete ('http://localhost:8083/SpringMVC/offer/remove-offer/'+id);
  }

  findById(id: BigInt){
    return this.http.get ('http://localhost:8083/SpringMVC/offer/retrieve-offer/{offer-id}');


  }
}