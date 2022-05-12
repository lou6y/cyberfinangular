import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offer} from "../_models/Offer";
import { Fav } from '../_models/fav';
import { Feedback } from '../_models/Feedback';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class JoBListService {

  readonly apiServerUrl= 'http://localhost:8083';
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get('http://localhost:8083/SpringMVC/offer/retrieveAllOffers');
  }

  findBlogByID(id:any) {
    return this.http.get('http://localhost:8083/SpringMVC/feedback/retrieve-feedback/'+id);
  }
  findAllfav() {
    return this.http.get<Fav[]>('http://localhost:8083/SpringMVC/offer/retrieveAllOffers');
  }
  add(offer:Offer) {
    return this.http.post ('http://localhost:8083/SpringMVC/offer/addOffer', offer);
  }

  update(offer: Offer) {offer
    return this.http.post('http://localhost:8083/SpringMVC/offer/modifyOffer', offer);
  }

  addFedback(Feedback:Feedback) {
    return this.http.post ('http://localhost:8083/SpringMVC/feedback/addFeedback', Feedback);
  }
  ExportFichier() {
    return this.http.get<any> ('http://localhost:8083/SpringMVC/offer/export/excel',{responseType:'arraybuffer' as 'json'});
  }

  SendMail(user:any) {
    return this.http.post('http://localhost:8083/SpringMVC/offer/SendMail',user);
  }
  findAllfeed() {
    return this.http.get ('http://localhost:8083/SpringMVC/feedback/retrieveAllFeedbacks');
  }
}
