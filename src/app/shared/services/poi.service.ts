import { map, catchError } from 'rxjs/operators';
import { ApiError } from './../models/api-error.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Poi } from './../models/poi.model';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoiService extends BaseApiService {

  private static readonly POI_API = `${BaseApiService.BASE_API}/pois`;

  private pois: Array <Poi> = [];

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable <Array<Poi> | ApiError> {
    return this.http.get<Array<Poi>>(`${PoiService.POI_API}/list`, BaseApiService.defaultOptions)
      .pipe(
        map((pois: Array<Poi>) => {
          pois = pois.map(poi => Object.assign(new Poi(), poi));
          this.pois = pois;
          return pois;
        }),
        catchError(this.handleError)
      );
  }

  create(poi): Observable <Poi | ApiError> {
    return this.http.post<Poi>(PoiService.POI_API, poi, BaseApiService.defaultOptions)
     .pipe(
      map(poi => {
        poi =  Object.assign(new Poi(), poi);
        this.pois.push(poi);
        return poi;
      }),
      catchError(this.handleError)
    );
  }
}
