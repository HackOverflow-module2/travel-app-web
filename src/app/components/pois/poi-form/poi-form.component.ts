import { ApiError } from './../../../shared/models/api-error.model';
import { Poi } from './../../../shared/models/poi.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input, ElementRef, NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { MapService } from '../../../shared/services/map.service';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-poi-form',
  templateUrl: './poi-form.component.html',
  styleUrls: ['./poi-form.component.less']
})
export class PoiFormComponent implements OnInit {
  
  @Input() poi: Poi = new Poi();
  @Output() poiSubmit: EventEmitter<Poi> = new EventEmitter();
  @ViewChild('poiForm') poiForm: FormGroup;
  @ViewChild('location') public  searchElement: ElementRef;
  apiError: ApiError;


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private mapService: MapService) { }

  ngOnInit() {
    this.mapService.autoCompleteAddress(this.searchElement);
  }

  onSubmitPoiForm():void {
    if(this.poiForm.valid) {
      this.poi.location[0] = this.mapService.locationCoordinates.lat;
      this.poi.location[1] = this.mapService.locationCoordinates.lng;
      this.poiSubmit.emit(this.poi);
    }
  }
  
  reset(): void {
    this.poi = new Poi();
    this.poiForm.reset();
  }

  onChangeGalleryFile(image: HTMLInputElement): void {
    if (image.files) {
      
      for (let i = 0; i < image.files.length; i++) {
        this.poi.gallery.push(image.files[i]);
      }
    }
  }
}
