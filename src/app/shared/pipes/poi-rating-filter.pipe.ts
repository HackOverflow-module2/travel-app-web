import { Pipe, PipeTransform } from '@angular/core';
import { Poi } from '../models/poi.model';

@Pipe({
  name: 'poiRatingFilter'
})
export class PoiRatingFilterPipe implements PipeTransform {

  transform(pois: Array<Poi>, pattern: number): any {
  
    if(!pois) {
      return [];
    } else if (!pattern) {
      return pois;
    } 
 
    return pois.filter(poi => (poi.rating >= pattern));

  }
}
