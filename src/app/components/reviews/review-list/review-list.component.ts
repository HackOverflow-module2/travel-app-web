import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from './../../../shared/services/review.service';
import { Review } from './../../../shared/models/review.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.less']
})
export class ReviewListComponent implements OnInit {

  reviews: Array<Review> = [];
  poiId: string;
  
  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => this.poiId = params.id),
      switchMap(poiId => this.reviewService.list(poiId))
    ).subscribe((reviews: Array<Review>) => {
      this.reviews = reviews;
    })
  }

}
