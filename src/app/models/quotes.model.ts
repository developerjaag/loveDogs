import { Pets } from './pets.model';

export interface Quote {
    date: Date;
    pet: Pets;
    description?: string;
}
