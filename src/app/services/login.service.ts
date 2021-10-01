import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }
  login(body : any){
    return this.http.post('https://bookcart.azurwebsites.net/api/login', body);
  }
}
