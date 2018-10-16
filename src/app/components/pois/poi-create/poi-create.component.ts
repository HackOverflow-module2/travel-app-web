import { ApiError } from './../../../shared/models/api-error.model';
import { Router } from '@angular/router';
import { Poi } from './../../../shared/models/poi.model';
import { PoiService } from './../../../shared/services/poi.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoiFormComponent } from '../poi-form/poi-form.component';

@Component({
  selector: 'app-poi-create',
  templateUrl: './poi-create.component.html',
  styleUrls: ['./poi-create.component.less']
})
export class PoiCreateComponent implements OnInit {

  @ViewChild(PoiFormComponent) poiFormComponent: PoiFormComponent;

  constructor(private poiService: PoiService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitCreatePoiForm(poi: Poi): void {
    this.poiService.create(poi)
    .subscribe((poi: Poi) => {
      this.poiFormComponent.reset();
      this.router.navigate(['/pois', poi.id]);
    });
  }
}
