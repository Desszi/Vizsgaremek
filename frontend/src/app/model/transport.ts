import { User } from "./user";
import { Product } from "./product";

export class Transport {

    _id: number =0 ;
    travelBy: string ="";
    place: string ="" ; //destinationplace
    trustMember: User = new User();
    products: Product[] = [];
    startStorage: Storage = new Storage();
}
