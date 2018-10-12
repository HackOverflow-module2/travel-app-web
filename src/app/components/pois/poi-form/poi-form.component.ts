import { Poi } from './../../../shared/models/poi.model';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-poi-form',
  templateUrl: './poi-form.component.html',
  styleUrls: ['./poi-form.component.less']
})
export class PoiFormComponent implements OnInit {
  
  @Input() poi: Poi = new Poi();
  @Output() poiSubmit: EventEmitter<Poi> = new EventEmitter();
  @ViewChild('poiForm') poiForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitPoiForm() {
    if(this.poiForm.valid) {
      this.poiSubmit.emit(this.poi);
    }
  }
  
  reset() {
    this.poi = new Poi();
    this.poiForm.reset();
  }
}
