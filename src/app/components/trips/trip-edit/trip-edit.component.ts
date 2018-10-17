import { Poi } from './../../../shared/models/poi.model';
import { PoiService } from './../../../shared/services/poi.service';
import { ApiError } from './../../../shared/models/api-error.model';
import { Coordinates } from './../../../shared/models/coordinates.model';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from './../../../shared/services/trip.service';
import { Trip } from './../../../shared/models/trip.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.less']
})
export class TripEditComponent implements OnInit {

  trip: Trip;
  tripId: string;
  origin: Coordinates;
  destination: Coordinates;
  apiError: ApiError;
  tripPois: Array<Poi> = [];
  inRoute: boolean = false;
  inTripEdition: boolean = true;


  constructor(private tripService: TripService, private poiService:PoiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTrip();
  }

  getTrip():void {
    this.route.params.pipe(
      map(params => this.tripId = params.id),
      switchMap(tripId => this.tripService.get(tripId))
    ). subscribe((trip: Trip) => {
      this.trip = trip
      this.getCoordinates();
      this.getTripPois();
    })
  }
  
  getTripPois(): void {
    this.trip.pois.forEach((poiId: string) => {
     return this.poiService.get(poiId)
     .subscribe((poi: Poi) => this.tripPois.push(poi))
    })
  }

  getCoordinates():void {
    this.origin = {
      lat: this.trip.originLocation[0], 
      lng: this.trip.originLocation[1]
    }
    this.destination = {
      lat: this.trip.destinationLocation[0], 
      lng: this.trip.destinationLocation[1]
    }
  }

  onClickUpdateTrip(trip):void {
    // this.tripService.edit(this.tripId, trip)
    // .subscribe((trip: Trip) => this.router.navigate(['trips', trip.id]))
  }

}