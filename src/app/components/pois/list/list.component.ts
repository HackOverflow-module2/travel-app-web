import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private mapService: MapService) {   }

  origin: Array<number> = [this.mapService.latitude[0], this.mapService.longitude[0]];
  destination: Array<number> = [this.mapService.latitude[1], this.mapService.longitude[1]];

  ngOnInit() {
  }

}
