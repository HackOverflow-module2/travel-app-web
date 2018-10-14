import { Poi } from './poi.model';
import { User } from "./user.model";

export class Trip {

  originLocation: Array<number> = [];
  destinationLocation: Array<number> = [];
  name: string;
  description?: string;
  gallery?: Array<File> = [];
  user: User = new User();
  pois: Array<string> = []; 
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;

  public asFormData(): FormData {
    const data = new FormData();

    for (const originLocation of this.originLocation) {
      data.append('originLocation', originLocation.toString());
    }

    for (const destinationLocation of this.destinationLocation) {
      data.append('destinationLocation', destinationLocation.toString());
    }

    data.append('name', this.name);
    data.append('description', this.description);

    for (const poi of this.pois) {
      data.append('poi', poi);
    }
    
    for (const file of this.gallery) {
      data.append('file', file);
    }

    return data;
  }
}




