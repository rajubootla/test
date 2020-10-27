import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewResponse } from '../models/newlistresponse';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  BASE_URL = 'https://newsapi.org/v2/everything';
  constructor(private http: HttpClient) { }


  newslist(input: any): Observable<NewResponse> {
    const url = this.BASE_URL + '?q=bitcoin&from=2020-10-27&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98';
    return this.http.get<NewResponse>(url);
  }
}
