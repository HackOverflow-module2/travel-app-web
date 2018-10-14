import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../shared/services/map.service';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.less']
})
export class TripCreateComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
    
  }

}
