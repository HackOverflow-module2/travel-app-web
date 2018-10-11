import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  title: String = 'My first AGM project';
  marta: Number = 40.4168;
  lng: Number = 3.7038;

  constructor() { }

  ngOnInit() {
  }

}
