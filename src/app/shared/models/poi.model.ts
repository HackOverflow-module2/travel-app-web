import { User } from './user.model';

export class Poi {
  location?: Array<number> = [];
  poiType?: string;
  name: string;
  description?: string;
  gallery?: Array<File> = [];
  tags?: Array<string> = [];
  rating?: number;
  user: User = new User();
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;

  public asFormData(): FormData {
    const data = new FormData();

    for (const location of this.location) {
      data.append('location', location.toString());
    }
    data.append('poiType', this.poiType);
    data.append('name', this.name);
    data.append('description', this.description);

    // if (this.tags) {
    //   for (const tag of this.tags) {
    //     data.append('tag', tag);
    //   }
    // }
    
    // data.append('rating', this.rating.toString());

    for (const file of this.gallery) {
      data.append('file', file);
    }

    return data;
  }
}




