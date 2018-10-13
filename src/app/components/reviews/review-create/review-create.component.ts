import { ActivatedRoute } from '@angular/router';
import { Review } from './../../../shared/models/review.model';
import { ReviewService } from './../../../shared/services/review.service';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.less']
})
export class ReviewCreateComponent implements OnInit {

  review: Review = new Review();
  poiId: string;

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmitCreateReview(reviewForm): void {
    this.route.params.pipe(
      map(params => this.poiId = params.id),
      switchMap(poiId => this.reviewService.create(this.review, poiId))
    ).subscribe(review => {
        reviewForm.reset();
    })
  }

}
