import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;
  baseURL = 'https://bookcart.azurewebsites.net/api/';
  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Book> {
    console.log(this.baseURL);
    return this.http.get<Book>(this.baseURL+'/book/');
  }
  getBookById(id: number): Observable<Book> {
    id=4;
    return this.http.get<Book>(this.baseURL+'/book/'+id);
  }
  addToCart(){
    let userId = sessionStorage.getItem('userId')
    return this.http.post<any>(`https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/${userId}/${Book}`, {})
  }

}
