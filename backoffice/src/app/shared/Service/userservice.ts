import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:8083/api/user/';
@Injectable ({ providedIn : 'root' })
export class Userservice {

  constructor(private httpClient: HttpClient) {}
  getAllUsers()
  { return this.httpClient.get('http://localhost:8083/SpringMVC/api/user/getAllUsers') }
  getUser(username: any)
  { return this.httpClient.get('http://localhost:8083/SpringMVC/api/user/getUser/'+ username)}
  getAccount(idUser: any)
  { return this.httpClient.get('http://localhost:8083/SpringMVC/api/user/getAccount/'+ idUser)}
  addUser(user: any)
  { return this.httpClient.post('http://localhost:8083/SpringMVC/api/user/add-User', user) }
  editUser(idUser: any, user: any)
  { return this.httpClient.put('http://localhost:8083/SpringMVC/api/user/updateUser/'+ idUser, user) }
  deleteUser(idUser: any)
  { return this.httpClient.delete('http://localhost:8083/SpringMVC/api/user/deleteUser/'+ idUser )}
  countByJob(job: any)
  {return this.httpClient.get('http://localhost:8083/SpringMVC/api/user/countbyjob/'+ job)}
}
