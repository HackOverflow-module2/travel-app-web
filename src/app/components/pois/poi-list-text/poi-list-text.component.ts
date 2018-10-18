import { Review } from './../../../shared/models/review.model';
import { ReviewService } from './../../../shared/services/review.service';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit, Input } from '@angular/core';
import { Poi } from '../../../shared/models/poi.model';

@Component({
  selector: 'app-poi-list-text',
  templateUrl: './poi-list-text.component.html',
  styleUrls: ['./poi-list-text.component.less']
})
export class PoiListTextComponent implements OnInit {

  @Input() pois: Array<Poi> = [];
  @Input() inUserProfile: boolean = false;
 
  constructor(private poiService: PoiService, private reviewService: ReviewService) { }

  ngOnInit() {
    this.poiService.list().subscribe((pois: Array<Poi>) => {
      if(!this.inUserProfile) {
        this.pois = pois;
      }
        this.pois.map(p => {
          this.reviewService.list(p.id).subscribe((reviews: Array<Review>) => {
            const reviewNumber: number = reviews.length;
            if(reviewNumber !== 0) {
              return p.rating = p.rating/reviewNumber
            } else {
              return
            }
          })
        })
    });
  }

}
