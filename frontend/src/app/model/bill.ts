import { Product } from "./product";
import { User } from "./user";

export class Bill {
    
    billId: number = 0;
    name: string = "";
    customer: User =  new User();
    products: Product[] = [];
    grandTotal: number = 0;
    paid: boolean = false;
}
