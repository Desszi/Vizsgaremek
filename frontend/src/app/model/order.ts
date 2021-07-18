import { Product } from "./product";
import { Transport } from "./transport";
import { User } from "./user";


export class Order {

    orderId: number = 0;
    name: string = "";
    businessUser: User =  new User();
    products: Product[] = [];
    transport: Transport = new Transport();
    active: boolean = false;

}
