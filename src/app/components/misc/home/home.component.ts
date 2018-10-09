import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild('originSearch') public  searchElement: ElementRef;
  @ViewChild('destinationSearch') public  searchElement2: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private mapService: MapService) { }

  ngOnInit() {
    this.mapService.autoCompleteCities(this.searchElement);
    this.mapService.autoCompleteCities(this.searchElement2);
    // this.mapService.saveCoordinates();
  }
}
