import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';
import { Coordinates } from '../../../shared/models/coordinates.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private mapService: MapService) {   }
  
  origin: Coordinates = { lat: this.mapService.latitude[0], lng: this.mapService.longitude[0]};
  destination: Coordinates = { lat: this.mapService.latitude[1], lng: this.mapService.longitude[1]};
  

  ngOnInit() {
  }



}
