import { User } from "./user";
import { Product } from "./product";

export class Transport {

    _id: string = "";
    trustMember: User = new User();
    travelBy: string ="";
    products: Product[] = [];
    startStorage: Storage = new Storage();
    destination: string ="" ;

}
