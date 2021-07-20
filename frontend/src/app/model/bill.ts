import { Product } from "./product";
import { User } from "./user";

export class Bill {

    _id: string = "";
    name: string = "";
    grandTotal: number = 0;
    paid: boolean = false;
    customer: User =  new User();
    products: Product[] = [];
}
