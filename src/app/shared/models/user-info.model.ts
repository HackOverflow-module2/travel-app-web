import { Poi } from './poi.model';
import { Trip } from './trip.model';
import { User } from "./user.model";

export class UserInfo {
    user: User = new User();
    trips: Array<Trip> = [];
    pois: Array<Poi> = [];
}