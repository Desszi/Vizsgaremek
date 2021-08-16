import { Product } from "./product";

export class Storage{

    _id: string ="";
    name: string = "";
    place: string = "";
    opened: boolean = true;
    products?: Product[] = [];

}



