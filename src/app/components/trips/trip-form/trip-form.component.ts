import { Router } from '@angular/router';
import { TripService } from './../../../shared/services/trip.service';
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
  @Input() origin: Coordinates;
  @Input() destination: Coordinates;
  @Input() action: string;
  @ViewChild('tripForm') tripForm: FormGroup;

  tripId: string;
  typeOfFunc: string;
  apiError: ApiError;

 
 


  constructor(private mapService: MapService, private router: Router, private tripService: TripService) { }

  ngOnInit() {
    this.trip.originLocation[0] = this.mapService.origin.lat;
    this.trip.originLocation[1] = this.mapService.origin.lng;
    this.trip.destinationLocation[0] = this.mapService.destination.lat;
    this.trip.destinationLocation[1] = this.mapService.destination.lng;
  }



  create():void {
    if(this.tripForm.valid) {
      this.tripService.create(this.trip)
      .subscribe((trip: Trip) => {
    this.router.navigate(['trips', trip.id]);
      }) 
    }
  }

  edit():void {
    // if(this.tripForm.valid) {
    //   this.tripService.create(this.trip)
    //   .subscribe((trip: Trip) => {
    // this.router.navigate(['trips', trip.id]);
    //   }) 
    // }
  }

 
  onChangeGalleryFile(image: HTMLInputElement): void {
    if (image.files) {
      
      for (let i = 0; i < image.files.length; i++) {
        this.trip.gallery.push(image.files[i]);
      }
    }
  }

  getAction(): void {
    const items = {
      create: this.create(),
      edit: this.edit()
    }
    items[this.typeOfFunc]
  }

  onSubmitTripCreate():void {
    // this.getAction(action);
  }




}
