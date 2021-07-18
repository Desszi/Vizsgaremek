import { Product } from "./product";

export class Storage{

    _id: string = "";
    name: string = "";
    place: string = "";
    products: Product[] = [];
    opened: boolean = true;
}



