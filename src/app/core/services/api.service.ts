import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string, params = {}): Observable<T> {
    return this.httpClient.get<T>(environment.apiUri + endpoint, {
      params,
    });
  }

  getDirectUrl<T>(url: string, params = {}): Observable<T> {
    return this.httpClient.get<T>(url, {
      params,
    });
  }
}
