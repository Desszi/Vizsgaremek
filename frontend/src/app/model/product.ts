export class Product {

    _id: string = "";
    name: string = "";
    description: string ="";
    price: number = 0;
    storage: Storage =  new Storage();
    available: boolean = false;
}
