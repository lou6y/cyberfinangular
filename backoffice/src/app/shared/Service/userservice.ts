import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:8086/api/user/';
@Injectable ({ providedIn : 'root' })
export class Userservice {

  constructor(private httpClient: HttpClient) {}
  getAllUsers()
  { return this.httpClient.get('http://localhost:8086/api/user/getAllUsers') }
  addUser(user: any)
  { return this.httpClient.post('$(this.API_URL}/add-User', user) }
  editUser(user: any)
  { return this.httpClient.put('$(this.API_URL}/edit-User', user) }
  deleteUser(idUser: any)
  { return this.httpClient.delete('http://localhost:8086/api/user/deleteUser/'+ idUser )}
}
