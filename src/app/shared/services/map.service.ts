import { Injectable, ElementRef, NgZone  } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private static readonly LATITUDE_KEY: string = 'latitude';
  private static readonly LONGITUDE_KEY: string = 'latitude';


  place: google.maps.places.PlaceResult;
  latitude: Array<number> = [];
  longitude: Array<number> = [];

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }
  autoCompleteCities(searchElement: ElementRef) {
    this.mapsAPILoader.load()
    .then(() => {
      const autocomplete = new google.maps.places.Autocomplete(searchElement.nativeElement, { types: ['(cities)'] });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          this.place = autocomplete.getPlace();
          this.latitude.push(this.place.geometry.location.lat());
          this.longitude.push(this.place.geometry.location.lng());
          if (this.place.geometry === undefined || this.place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  saveCoordinates(): void {
    localStorage.setItem(MapService.LATITUDE_KEY, JSON.stringify(this.latitude));
    localStorage.setItem(MapService.LONGITUDE_KEY, JSON.stringify(this.longitude));
  }
}
