import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild('originSearch') public  searchElement: ElementRef;
  @ViewChild('destinationSearch') public  searchElement2: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.mapsAPILoader.load()
    .then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['(cities)'] });
      const autocomplete2 = new google.maps.places.Autocomplete(this.searchElement2.nativeElement, { types: ['(cities)'] });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          const originLat: number = place.geometry.location.lat();
          console.log(originLat);
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

}
