import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class associationService {
  readonly API_URL = 'http://localhost:8083/SpringMVC';

  constructor(private httpClient: HttpClient) { }

  getAllAssociation() {
    return this.httpClient.get('http://localhost:8083/SpringMVC/association/retrieve-all-association')
  }
  addAssociation(association : any) {
    return this.httpClient.post('http://localhost:8083/SpringMVC/association/add-association', association)
  }
  editAssociation(association : any){
    return this.httpClient.put('http://localhost:8083/SpringMVC/association/modify-association', association)
  }
  deleteAssociation(idAssociation : any){
    return  this.httpClient.delete('http://localhost:8083/SpringMVC/association/remove-association/${idAssociation}')
  }
  getInteretTotale() {
    return this.httpClient.get('http://localhost:8083/SpringMVC/association/interetTotale')
  }
}
