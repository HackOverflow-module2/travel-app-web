import { map, catchError } from 'rxjs/operators';
import { ApiError } from './../models/api-error.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService extends BaseApiService {

  private static readonly TRIP_API = `${BaseApiService.BASE_API}/trips`;
  private trips: Array <Trip> = [];


  constructor(private http: HttpClient) { 
    super();
  }

  create(trip): Observable<Trip | ApiError> {
    return this.http.post<Trip>(TripService.TRIP_API, trip, BaseApiService.defaultOptions)
      .pipe(
        map((trip: Trip) => Object.assign(new Trip(), trip)),
        catchError(this.handleError)
      );
  }

  get(tripId): Observable<Trip | ApiError> {
    return this.http.get<Trip>(`${TripService.TRIP_API}/${tripId}`, BaseApiService.defaultOptions)
      .pipe(
        map((trip: Trip) => Object.assign(new Trip(), trip)),
        catchError(this.handleError)
      );
  }

  list(): Observable <Array<Trip> | ApiError> {
    return this.http.get<Array<Trip>>(`${TripService.TRIP_API}/list`, BaseApiService.defaultOptions)
      .pipe(
        map((trips: Array<Trip>) => {
          trips = trips.map(trip => Object.assign(new Trip(), trip));
          this.trips = trips;
          return trips;
        }),
        catchError(this.handleError)
      );
  }

  edit(tripId, trip): Observable<Trip | ApiError> {
    return this.http.post<Trip>(`${TripService.TRIP_API}/${tripId}`, trip.asFormData(), { withCredentials: true })
      .pipe(
        map((trip: Trip) => Object.assign(new Trip(), trip))
      );
  }
}
