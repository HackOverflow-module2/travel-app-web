import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../shared/models/trip.model';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.less']
})
export class TripFormComponent implements OnInit {

  trip: Trip = new Trip();

  constructor() { }

  ngOnInit() {
  }

}
