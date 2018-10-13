import { Poi } from './../models/poi.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poisFilter'
})
export class PoisFilterPipe implements PipeTransform {

  transform(pois: Array<Poi>, pattern: Array<string>, field: string = 'poiType'): Array<Poi> {
    if(!pois) {
      return [];
    } else if (!pattern) {
      return pois;
    } 
 
   return pois.filter(poi => (pattern.indexOf(poi[field]) !== -1))
    
  }

}
