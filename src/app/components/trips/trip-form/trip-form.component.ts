import { MapService } from './../../../shared/services/map.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Trip } from '../../../shared/models/trip.model';
import { Poi } from '../../../shared/models/poi.model';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.less']
})
export class TripFormComponent implements OnInit {

  @Input() tripPois: Array<Poi> =[];
  @Input() trip: Trip = new Trip();
  @ViewChild('tripForm') tripForm: FormGroup;
  @Output() tripSubmit: EventEmitter<Trip> = new EventEmitter();


  constructor(private mapService: MapService) { }

  ngOnInit() {
  }


  onSubmitTripForm():void {
    if(this.tripForm.valid) {
      this.trip.originLocation[0] = this.mapService.origin.lat;
      this.trip.originLocation[1] = this.mapService.origin.lng;
      this.trip.destinationLocation[0] = this.mapService.destination.lat;
      this.trip.destinationLocation[1] = this.mapService.destination.lng;
      const tripPoiId = this.tripPois.map(tripPoi => tripPoi.id);
      this.trip.pois = tripPoiId;
      this.tripSubmit.emit(this.trip);
    }
  }

}
