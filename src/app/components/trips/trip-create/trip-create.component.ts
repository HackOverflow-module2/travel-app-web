import { Poi } from './../../../shared/models/poi.model';
import { Component, OnInit, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.less']
})
export class TripCreateComponent implements OnInit {

  @Input() tripPois: Array<Poi> =[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

}
