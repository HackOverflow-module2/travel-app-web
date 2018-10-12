import { ActivatedRoute } from '@angular/router';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit } from '@angular/core';
import { Poi } from '../../../shared/models/poi.model';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-poi-detail',
  templateUrl: './poi-detail.component.html',
  styleUrls: ['./poi-detail.component.less']
})
export class PoiDetailComponent implements OnInit {
  poi: Poi = new Poi();

  constructor(private poiService: PoiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.id),
      switchMap(poiId => this.poiService.get(poiId))
    ).subscribe((poi: Poi) => this.poi = poi);

    
  }

}
