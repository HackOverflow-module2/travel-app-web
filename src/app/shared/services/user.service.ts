import { ApiError } from './../models/api-error.model';
import { BaseApiService } from './base-api.service';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService{

  private static readonly USER_API = `${BaseApiService.BASE_API}/users`;

  constructor(private http: HttpClient) { 
    super();
  }

  detail(userId: String): Observable<User | ApiError> {
    return this.http.get<User>(`${UserService.USER_API}/${userId}`, BaseApiService.defaultOptions);
  }
}
