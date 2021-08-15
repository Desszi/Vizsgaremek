import { Order } from "./order";

export class User {

    _id: number = 0;
    first_name?: string = "";
    last_name?: string = "";
    birthDate?: Date = new Date();
    birthPlace?: string ="";
    email: string = "";
    address?: string = "";
    active?: boolean = true;
    businessRelationship?: string = "";
    orders?: Order[] = [];
    password?: string='';
    accessToken?: string ='';
}
