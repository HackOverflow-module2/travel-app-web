import { Router } from '@angular/router';
import { ReviewService } from './../../../shared/services/review.service';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Coordinates } from '../../../shared/models/coordinates.model';
import { Poi } from '../../../shared/models/poi.model';
import { Review } from '../../../shared/models/review.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() inTrip: boolean = false;
  
  origin: Coordinates = this.mapService.getOrigin();
  destination: Coordinates = this.mapService.getDestination();
  pois: Array<Poi> = [];
  tripPois: Array<Poi> = [];
  searchPattern: string;
  searchPatternRating: number;



  constructor(private mapService: MapService, private poiService: PoiService, private reviewService: ReviewService, private router:Router) {   }

  
  ngOnInit() {
    this.poiService.list().subscribe((pois: Array<Poi>) => {
      this.pois = pois;
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



  onClickAddPoi(poi) {
    if(this.inTrip) {
         this.tripPois.push(poi);
    } else {
      this.router.navigate(['pois', poi.id])
    }

  }

}
