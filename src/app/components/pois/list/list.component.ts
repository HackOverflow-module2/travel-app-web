import { ReviewService } from './../../../shared/services/review.service';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Coordinates } from '../../../shared/models/coordinates.model';
import { Poi } from '../../../shared/models/poi.model';
import { Review } from '../../../shared/models/review.model';
import { Trip } from '../../../shared/models/trip.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {


  @Input() origin: number = this.mapService.getOrigin();
  @Input() destination: number = this.mapService.getDestination();
  @Input() tripPois: Array<Poi> = [];
  @Input() inRoute: boolean = true;
  @Input() inTripEdition: boolean = false;
  @Input() trip: Trip = new Trip();
  @Output() emitTripPoi: EventEmitter<Poi> = new EventEmitter();

  pois: Array<Poi> = [];
  searchPattern: string;
  searchPatternRating: number;
  lat;
  lng;
  isCollapsed: boolean;
  filtersIsCollapsed: boolean;
  formIsCollapsed: boolean;

  constructor(private mapService: MapService, private poiService: PoiService, private reviewService: ReviewService) {   }
  
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
    if(!this.inTripEdition) {
      this.tripPois.push(poi);
    } else {
      this.emitTripPoi.emit(poi)
    }
  }

}
