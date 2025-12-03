import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }
  login(data: any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list-of-users`);
  }
}
