export class User {
    firstName: string;
    surname: string;
    image?: File;
    password?: string;
    email: string;
    tags?: Array<string> = [];
    rating: number;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
    id?: string;

    public asFormData(): FormData {
        const data = new FormData();

        data.append('firstName', this.firstName);
        data.append('surname', this.surname);
        data.append('image', this.image);
        data.append('password', this.password);
        data.append('email', this.email);

        // for (const tag of this.tags) {
        //     data.append('tag', tag);
        //     }

        // data.append('rating', this.rating.toString());
        data.append('role', this.role);

        return data;
  }
}
