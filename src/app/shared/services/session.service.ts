import { ApiError } from './../models/api-error.model';
import { BaseApiService } from './base-api.service';
import { environment } from './../../../environments/environment';
import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SessionService extends BaseApiService {

  private static readonly SESSIONS_API = `${BaseApiService.BASE_API}/sessions`;

  private static readonly CURRENT_USER_KEY = 'current-user'

  user: User = new User();

  constructor(private http: HttpClient) {
    super();
    const userData = localStorage.getItem(SessionService.CURRENT_USER_KEY);
    if (userData) {
      this.user = Object.assign(new User(), JSON.parse(userData));
    }
  }

  authenticate(user: User): Observable<User | ApiError> {
   return this.http.post<User>(SessionService.SESSIONS_API, user, BaseApiService.defaultOptions)
    .pipe(
      map((user: User) => {
        this.doAuthenticate(user);
        return user;
      })
    );
  }

  private doAuthenticate(user: User): void {
    this.user = user;
    localStorage.setItem(SessionService.CURRENT_USER_KEY, JSON.stringify(this.user));
  }
}



