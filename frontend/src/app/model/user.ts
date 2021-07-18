import { Order } from "./order";

export class User {

    userId: number = 0;
    firstName: string = "";
    lastName: string = "";
    birthDate: Date = new Date();
    birthPlace: string ="";
    email: string = "";
    address: string = "";
    active: boolean = true;
    businessRelationship: string = "";
    orders: Order[] = [];
}
