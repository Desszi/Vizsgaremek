import { User } from "./user";
import { Product } from "./product";

export class Transport {

    _id: string ="" ;
    travelBy?: string ="";
    place: string ="" ; //destinationplace
    trustMember: User = new User();
    products?: Product[] = [];
    startStorage?: Storage = new Storage();
}
