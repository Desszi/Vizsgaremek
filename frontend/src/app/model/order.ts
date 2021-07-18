import { Product } from "./product";
import { Transport } from "./transport";
import { User } from "./user";


export class Order {

    _id: string = "";
    name: string = "";
    businessUser: User =  new User();
    products: Product[] = [];
    transport: Transport = new Transport();
    time: Date = new Date();
    comment: string = "";
    active: boolean = false;

}
