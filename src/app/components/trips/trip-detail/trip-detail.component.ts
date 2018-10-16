import { ActivatedRoute } from '@angular/router';
import { Trip } from './../../../shared/models/trip.model';
import { switchMap, map } from 'rxjs/operators';
import { TripService } from './../../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.less']
})
export class TripDetailComponent implements OnInit {

  trip: Trip = new Trip();

  constructor(private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.id),
      switchMap(tripId => this.tripService.get(tripId))
    ).subscribe((trip: Trip) => this.trip = trip);

  }

}
