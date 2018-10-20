import { SessionService } from './../../../shared/services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from './../../../shared/models/trip.model';
import { switchMap, map } from 'rxjs/operators';
import { TripService } from './../../../shared/services/trip.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.less']
})
export class TripDetailComponent implements OnInit {

  trip: Trip = new Trip();
  user: User;

  constructor(private tripService: TripService, private route: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.user;
    this.route.params.pipe(
      map(params => params.id),
      switchMap(tripId => this.tripService.get(tripId))
    ).subscribe((trip: Trip) => this.trip = trip);

  }

}
