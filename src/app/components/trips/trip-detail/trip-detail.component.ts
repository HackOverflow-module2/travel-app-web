import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { TripService } from './../../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../shared/models/trip.model';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.less']
})
export class TripDetailComponent implements OnInit {

  trip: Trip = new Trip();
  tripId: string;

  constructor(private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => this.tripId = params.id),
      switchMap((tripId: string) => this.tripService.get(tripId))
    ).subscribe((trip: Trip) => this.trip = trip)
  }


}
