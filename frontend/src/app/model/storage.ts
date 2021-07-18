import { Product } from "./product";

export class Storage{
    
    storageId: number = 0; 
    name: string = "";
    place: string = "";
    products: Product[] = [];
    opened: boolean = true;
}



