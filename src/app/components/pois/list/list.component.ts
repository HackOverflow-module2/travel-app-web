import { Coordinates } from './../../../shared/models/coordinates.model';
import { TripService } from './../../../shared/services/trip.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from './../../../shared/services/review.service';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Poi } from '../../../shared/models/poi.model';
import { Review } from '../../../shared/models/review.model';
import { Trip } from '../../../shared/models/trip.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tripPois: Array<Poi> = [];
  trip: Trip = new Trip();
  action: string;
  origin;
  destination;
  pois: Array<Poi> = [];
  searchPattern: string;
  searchPatternRating: number;
  lat;
  lng;
  isCollapsed: boolean;
  filtersIsCollapsed: boolean;
  formIsCollapsed: boolean;
  tripId: string;
  inTripEdition: boolean = false;


  constructor(private mapService: MapService, private poiService: PoiService, private reviewService: ReviewService, private route: ActivatedRoute, private tripService: TripService, private router: Router) {   }
  

  ngOnInit() {
    this.getPois();
    this.getAction();
    if(this.action === 'route') {
      this.getCoordinates();
    } 
    if(this.action !== 'route') {
      this.getTrip();
    }
  }

  getAction() {
   this.action = this.route.snapshot.url.join('')
  }


  getPois() {
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


  getCoordinates():void {
    if(this.action === 'route') {
      this.origin = this.mapService.getOrigin();
      this.destination = this.mapService.getDestination();
    }

    if(this.action !== 'route') {
      this.getTrip();
      this.origin = {
        lat: this.trip.originLocation[0], 
        lng: this.trip.originLocation[1]
      }
      this.destination = {
        lat: this.trip.destinationLocation[0], 
        lng: this.trip.destinationLocation[1]
      }
    }

  }

  getTripPois(): void {
    this.trip.pois.forEach((poiId: string) => {
     return this.poiService.get(poiId)
     .subscribe((poi: Poi) => this.tripPois.push(poi))
    })
  }

  getTrip():void {
      this.route.params.pipe(
        map(params => this.tripId = params.id),
        switchMap(tripId => this.tripService.get(tripId))
      ).subscribe((trip: Trip) => {
        this.trip = trip
        this.getCoordinates();
        this.getTripPois();
      })
  }


  onClickInTripEdition() {
    this.formIsCollapsed = !this.formIsCollapsed
    this.inTripEdition = true;
  }

  onClickInShowPois() {
    this.formIsCollapsed = !this.formIsCollapsed
    this.inTripEdition = false;
  }


  onClickAddPoi(poi) {
    if(this.inTripEdition) {
      if(this.tripPois.indexOf(poi) === -1) {
        this.tripPois.push(poi);
      } else {
        this.tripPois.splice(poi);
      }
    } else {
      this.router.navigate(['pois', poi.id])
    }
  }



}
