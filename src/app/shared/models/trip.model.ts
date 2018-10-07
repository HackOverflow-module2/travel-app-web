export class Trip {
  originPlace: string;
  destinationPlace: string;
  originLocation: {
    type: string,
    coordinates: number
  };
  destinationLocation: {
    type: string,
    coordinates: number
  };
  name: string;
  description?: string;
  // add gallery, user, tags, poi here
}
