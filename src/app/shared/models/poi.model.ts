import { User } from './user.model';

export class Poi {
  location: {
    type: string,
    coordinates: number
  };
  poiTypes?: [string];
  name: string;
  description: string;
  gallery?: [string];
  tags?: [string];
  rating: number;
  user: User = new User();
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
}

