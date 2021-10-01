import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'https://bookcart.azurewebsites.net/api/';

  constructor( private http: HttpClient) {
  }

register(data:any): Observable<any> {        
        //let httpParams = new HttpParams().set('auth_token', access_token);
        //let options = { params: httpParams };        
        return this.http.post(this.baseURL+'/User', data);
    } 
}
