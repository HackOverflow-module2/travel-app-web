import { UserInfo } from './../models/user-info.model';
import { Poi } from './../models/poi.model';
import { Trip } from './../models/trip.model';
import { map, catchError } from 'rxjs/operators';
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

  user: User = null;
  userTrips: Array<Trip>;
  userPois: Array<Poi>
  allInfo: UserInfo;

  private static readonly USER_API = `${BaseApiService.BASE_API}/users`;
  private static readonly CURRENT_USER_KEY = 'current-user';

  constructor(private http: HttpClient) { 
    super();
  }



  getUserInfo(userId): Observable <UserInfo | ApiError> {
    return this.http.get<UserInfo>(`${UserService.USER_API}/${userId}`, BaseApiService.defaultOptions)
      .pipe(
        map((userInfo: UserInfo) => {
          this.user = userInfo.user;
          this.userPois = userInfo.pois.map(poi => Object.assign(new Poi(), poi))
          this.userTrips = userInfo.trips.map(trip => Object.assign(new Trip(), trip))
          return userInfo;
        }),
        catchError(this.handleError)
      );
  }


  create(user: User): Observable<User | ApiError> {
    return this.http.post<User>(UserService.USER_API, user, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => {
        Object.assign(new User(), user)
        return this.user = user;
        }),
        catchError(this.handleError)
      );
  }
  
  detail(userId: string): Observable<User | ApiError> {
    return this.http.get<User>(`${UserService.USER_API}/${userId}`, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => Object.assign(new User(), user)),
        catchError(this.handleError)
      );
  }

  edit(userId: string, user: User): Observable<User | ApiError> {
    return this.http.post<User>(`${UserService.USER_API}/${userId}`, user.asFormData(), { withCredentials: true })
      .pipe(
        map((user: User) => {
          Object.assign(new User(), user)
          this.upDateUser(user);
          return user;
        }),
        catchError(this.handleError)
      )
  }


  private upDateUser(user: User): void {
    this.user = user;
    localStorage.setItem(UserService.CURRENT_USER_KEY, JSON.stringify(this.user));
  }

  getUserData
}
