import { Coordinates } from './../models/coordinates.model';
import { Injectable, ElementRef, NgZone  } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private static readonly ORIGIN_KEY: string = 'origin';
  private static readonly DESTINATION_KEY: string = 'destination';

  origin:Coordinates = new Coordinates();
  destination: Coordinates = new Coordinates();


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  autoCompleteCityOrigin(searchElement: ElementRef) {
    this.mapsAPILoader.load()
    .then(() => {
      const autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, { types: ['(cities)'] });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlace();
          this.origin.lat = place.geometry.location.lat();
          this.origin.lng = place.geometry.location.lng();
          this.saveCoordinates(MapService.ORIGIN_KEY, this.origin);
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }


  autoCompleteCityDestination(searchElement: ElementRef) {
    this.mapsAPILoader.load()
    .then(() => {
      const autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, { types: ['(cities)'] });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlace();
          this.destination.lat = place.geometry.location.lat();
          this.destination.lng = place.geometry.location.lng();
          this.saveCoordinates(MapService.DESTINATION_KEY, this.destination);
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }



  saveCoordinates(pointKey, pointValue): void {
    localStorage.setItem(pointKey, JSON.stringify(pointValue));
  }

  getOrigin(): Coordinates {
    return JSON.parse(localStorage.getItem(MapService.ORIGIN_KEY));
  }

  getDestination(){
    return JSON.parse(localStorage.getItem(MapService.DESTINATION_KEY));  }
}
