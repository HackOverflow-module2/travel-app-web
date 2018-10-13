import { Poi } from './../models/poi.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poisFilter'
})
export class PoisFilterPipe implements PipeTransform {

  transform(pois: Array<Poi>, pattern: string, field: string = 'poiType'): Array<Poi> {
    if(!pois) {
      return [];
    } else if (!pattern) {
      return pois;
    } 

    const regex = new RegExp(pattern, 'i');
    
    return pois.filter(poi => poi[field].match(regex));
  }

}
