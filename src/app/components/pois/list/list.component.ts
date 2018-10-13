import { ReviewService } from './../../../shared/services/review.service';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Coordinates } from '../../../shared/models/coordinates.model';
import { Poi } from '../../../shared/models/poi.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  origin: Coordinates = this.mapService.getOrigin();
  destination: Coordinates = this.mapService.getDestination();
  pois: Array<Poi> = [];
  searchPattern: string;

  constructor(private mapService: MapService, private poiService: PoiService, private reviewService: ReviewService) {   }

  ngOnInit() {
    this.poiService.list().subscribe((pois: Array<Poi>) => {
      this.pois = pois;
      this.pois.map(p => {
        debugger;
        console.log(this.reviewService.reviewNumber())
          if(this.reviewService.reviewNumber() !== 0) {
            console.log(p.rating , p.rating/this.reviewService.reviewNumber())
            return p.rating = p.rating/this.reviewService.reviewNumber()
          }
      })
      
    });
  }

}
