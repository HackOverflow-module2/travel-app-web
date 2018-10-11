import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly USER_API = `${environment.baseApi}/users`;
  private static readonly defaultOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  detail(userId: String): Observable<User> {
    return this.http.get<User>(`${UserService.USER_API}/${userId}`, UserService.defaultOptions);
  }
}
