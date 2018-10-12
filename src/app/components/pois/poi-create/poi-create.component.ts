import { Component, OnInit } from '@angular/core';
import { Poi } from '../../../shared/models/poi.model';

@Component({
  selector: 'app-poi-create',
  templateUrl: './poi-create.component.html',
  styleUrls: ['./poi-create.component.less']
})
export class PoiCreateComponent implements OnInit {
  poi: Poi = new Poi();

  constructor() { }

  ngOnInit() {

  }

}
