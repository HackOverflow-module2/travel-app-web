import { Poi } from './poi.model';
import { User } from './user.model';

export class Review {
    rating: number;
    title: string;
    description: string;
    user: User = new User();
    poi: Poi = new Poi();
    createdAt?: Date;
    updatedAt?: Date;
    id?: string;
}
