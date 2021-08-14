import { Product } from "./product";
import { Transport } from "./transport";
import { User } from "./user";


export class Order {

    _id: number =0;
    time: Date = new Date();
    comment: string = "";
    active: boolean = false;
    businessUser: User =  new User();
    products: Product[] = [];
    transport: Transport = new Transport();
   

}
