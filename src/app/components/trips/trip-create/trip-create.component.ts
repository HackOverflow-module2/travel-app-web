import { Router } from '@angular/router';
import { Trip } from './../../../shared/models/trip.model';
import { TripService } from './../../../shared/services/trip.service';
import { Poi } from './../../../shared/models/poi.model';
import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.less']
})
export class TripCreateComponent implements OnInit {

  @Input() tripPois: Array<Poi> =[];
  @Input() trip: Trip = new Trip();

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitCreateTripForm(trip: Trip): void {
    this.tripService.create(trip)
    .subscribe((trip: Trip) => {
      this.router.navigate(['trips', trip.id]);
    })
  }

}
