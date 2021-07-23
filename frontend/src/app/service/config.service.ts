import { Injectable } from '@angular/core';

export interface ITableColumn {
 title: string;
 key: string;
 hidden? : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiURL: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "firstName", title: "First Name" }, 
    { key: "lastName", title: "Last Name" },
    { key: "birthDate", title: "Birthday"  },
    { key: "birthPlace", title: "Birthplace" },
    { key: "email", title: "Email Address" },
    { key: "address", title: "Street Address" }, 
    { key: "active", title: "Active" },
    { key: "businessRelationship", title: "Business Relationship" }, 
    { key: "orders", title: "Orders" }
  ];

  productColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Product Name" }, 
    { key: "description", title: "Description" },
    { key: "price", title: "Price"  },
    { key: "available", title: "Available" },
    { key: "storage", title: "Storage" }, 
    
  ];

  billColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Bill Identify" }, 
    { key: "grandTotal", title: "Grand Total" },
    { key: "paid", title: "Paid"  },
    { key: "customer", title: "Customer" },
    { key: "products", title: "Products" }, 
    
  ];

  orderColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "time", title: "Time of Order" }, 
    { key: "comment", title: "Comment" },
    { key: "active", title: "Active"  },
    { key: "businessUser", title: "Business User" },
    { key: "transport", title: "Transport" }, 
    
  ];

  storageColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Storage Name" }, 
    { key: "Place", title: "Place" },
    { key: "opened", title: "Opened"  },
    { key: "products", title: "Products" }, 
    
  ];

  transportColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "travelBy", title: "Vehicle" }, 
    { key: "destination", title: "Destination Place" },
    { key: "trustMember", title: "Responsible People"  },
    { key: "products", title: "Products" }, 
    { key: "startStorage", title: "Start Storage" }
    
  ];
  constructor() { }
}
