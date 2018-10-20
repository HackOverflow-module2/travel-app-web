import { Poi } from './../../../shared/models/poi.model';
import { Router } from '@angular/router';
import { TripService } from './../../../shared/services/trip.service';
import { Coordinates } from './../../../shared/models/coordinates.model';
import { ApiError } from './../../../shared/models/api-error.model';
import { MapService } from './../../../shared/services/map.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Trip } from '../../../shared/models/trip.model';


@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
  styleUrls: ['./trip-form.component.less']
})
export class TripFormComponent implements OnInit {

  @Input() tripPois: Array<Poi> =[];
  @Input() trip: Trip = new Trip();
  @Input() action: string;
  @Input() tripId: string;
  @ViewChild('tripForm') tripForm: FormGroup;

  typeOfFunction;
  apiError: ApiError;

 


  constructor(private mapService: MapService, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    if(this.action === 'route') {
      this.trip.originLocation[0] = this.mapService.origin.lat;
      this.trip.originLocation[1] = this.mapService.origin.lng;
      this.trip.destinationLocation[0] = this.mapService.destination.lat;
      this.trip.destinationLocation[1] = this.mapService.destination.lng;
    }
  }



  create():void {
    if(this.tripForm.valid) {
      this.addPois()
      this.trip.originLocation[0] = this.mapService.origin.lat;
      this.trip.originLocation[1] = this.mapService.origin.lng;
      this.trip.destinationLocation[0] = this.mapService.destination.lat;
      this.trip.destinationLocation[1] = this.mapService.destination.lng;
      this.tripService.create(this.trip)
      .subscribe((trip: Trip) => {
      this.router.navigate(['trips', trip.id]);
      })
    }
  }

  edit():void {
    this.addPois()
    this.tripService.edit(this.tripId, this.trip)
    .subscribe((trip: Trip) => {
      this.router.navigate(['trips', trip.id])
    })
  }


 
  onChangeGalleryFile(image: HTMLInputElement): void {
    if (image.files) {
      
      for (let i = 0; i < image.files.length; i++) {
        this.trip.gallery.push(image.files[i]);
      }
    }
  }

  getAction(): void {
    if(this.action ==='route') {
     this.create();
    } else {
      this.edit();
    } 
  }

  addPois() {
    const tripPoiId = this.tripPois.map(tripPoi => tripPoi.id);
    this.trip.pois = tripPoiId;
  }

  onSubmitTripCreate():void {
    this.getAction();
  }




}
