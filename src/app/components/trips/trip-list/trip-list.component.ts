import { Trip } from './../../../shared/models/trip.model';
import { TripService } from './../../../shared/services/trip.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.less']
})
export class TripListComponent implements OnInit {

   @Input() trips: Array<Trip> = [];
   @Input() inUserProfile: boolean = false;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.list()
    .subscribe((trips: Array<Trip>) => {
      if(!this.inUserProfile) {
      this.trips = trips;
      }
    })
  }

}
