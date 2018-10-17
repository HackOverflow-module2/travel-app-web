import { Coordinates } from './../../../shared/models/coordinates.model';
import { ApiError } from './../../../shared/models/api-error.model';
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
  @Input() inTripEdition: boolean = false;
  @Input() origin: Coordinates;
  @Input() destination: Coordinates;
  @ViewChild('tripForm') tripForm: FormGroup;
  @Output() tripSubmit: EventEmitter<Trip> = new EventEmitter();
  apiError: ApiError;


  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.trip.originLocation[0] = this.mapService.getOrigin();
    this.trip.originLocation[1] = this.mapService.getOrigin();
    this.trip.destinationLocation[0] = this.mapService.getDestination();
    this.trip.destinationLocation[1] = this.mapService.getDestination();
  }
  
  onChangeGalleryFile(image: HTMLInputElement): void {
    if (image.files) {
      
      for (let i = 0; i < image.files.length; i++) {
        this.trip.gallery.push(image.files[i]);
      }
    }
  }

  onSubmitTripForm():void {
    if(this.tripForm.valid) {
      if(this.inTripEdition) {
        this.trip.originLocation[0] = this.origin.lat;
        this.trip.originLocation[1] = this.origin.lng;
        this.trip.destinationLocation[0] = this.destination.lat;
        this.trip.destinationLocation[1] = this.destination.lng;
        this.inTripEdition = false;
      }
        const tripPoiId = this.tripPois.map(tripPoi => tripPoi.id);
        this.trip.pois = tripPoiId;
        this.tripSubmit.emit(this.trip);
    }
  }



}
