import { map, catchError } from 'rxjs/operators';
import { ApiError } from './../models/api-error.model';
import { Observable, Subject } from 'rxjs';
import { Review } from './../models/review.model';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseApiService {

  private static readonly REVIEW_API = `${BaseApiService.BASE_API}/reviews`;
  
  private reviews: Array<Review> = [];
  private reviewsSubject: Subject <Array<Review>> = new Subject();
  reviewsNumber: number;

  constructor(private http: HttpClient) { 
    super();
  }

  create(review, poiId): Observable<Review | ApiError> {
   return this.http.post<Review>(`${ReviewService.REVIEW_API}/${poiId}`, review, BaseApiService.defaultOptions)
    .pipe(
      map(review => {
        Object.assign(new Review(), review);
        this.reviews.push(review);
        this.notifyReviewChanges()
        return review;
      }),
      catchError(this.handleError)
    )
  }

  list(poiId): Observable<Array<Review> | ApiError> {
    return this.http.get<Array<Review>>(`${ReviewService.REVIEW_API}/${poiId}/list`, BaseApiService.defaultOptions)
      .pipe(
        map((reviews: Array<Review>) => {
          reviews = reviews.map(review => Object.assign(new Review(), review))
          this.reviews = reviews;
          this.reviewsNumber = this.reviews.length;
          this.notifyReviewChanges();
          return reviews
        })
      )
  }

  onReviewChanges(): Observable<Array<Review>> {
    return this.reviewsSubject.asObservable();
  }

  private notifyReviewChanges(): void {
    this.reviewsSubject.next(this.reviews);
  }

  reviewNumber(): number {
    return this.reviews.length
  }


}

