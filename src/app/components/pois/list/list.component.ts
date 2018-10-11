import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Coordinates } from '../../../shared/models/coordinates.model';
import { Poi } from '../../../shared/models/poi.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  origin: Coordinates = this.mapService.getOrigin();
  destination: Coordinates = this.mapService.getDestination();
  pois: Array<Poi> = [];
  coordinates: Array<Coordinates> = [];

  constructor(private mapService: MapService, private poiService: PoiService) {   }

  ngOnInit() {
    this.poiService.list().subscribe((pois: Array<Poi>) => {
      this.pois = pois;
    });
  }

  getPoisCoordinates() {
    this.pois.map(poi => {
     const coordinate: Coordinates = {lat: poi.location.coordinates[0], lng: poi.location.coordinates[1]};
     this.coordinates.push(coordinate);
    });
  }

}
