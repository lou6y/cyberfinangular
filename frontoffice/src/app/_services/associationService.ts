import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class associationService {
  readonly API_URL = 'http://localhost:8081';

  constructor(private httpClient: HttpClient) { }

  getAllAssociation() {
    return this.httpClient.get(`${this.API_URL}/CyberFin/association/retrieve-all-association`)
  }
  addAssociation(association : any) {
    return this.httpClient.post(`${this.API_URL}/CyberFin/association/add-association`, association)
  }
  editAssociation(association : any){
    return this.httpClient.put(`${this.API_URL}/CyberFin/association/modify-association`, association)
  }
  deleteAssociation(idAssociation : any){
    return  this.httpClient.delete(`${this.API_URL}/CyberFin/association/remove-association/${idAssociation}`)
  }
 getRocommandation(id:any){
     return this.httpClient.get(`${this.API_URL}/CyberFin/association/retrieve-associationScore`,id)
 }

}
