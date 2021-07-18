import { User } from "./user";
import { Product } from "./product";

export class Transport {

    transportid: number = 0;
    trustMember: User = new User();
    travelBy: string ="";
    products: Product[] = [];
    startStorage: Storage = new Storage();
    destination: string ="" ;

}
