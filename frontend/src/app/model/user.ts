import { Order } from "./order";

export class User {

    _id: string = "";
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
