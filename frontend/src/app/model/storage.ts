import { Product } from "./product";

export class Storage{

    _id: number =0;
    name: string = "";
    place: string = "";
    opened: boolean = true;
    products?: Product[] = [];

}



