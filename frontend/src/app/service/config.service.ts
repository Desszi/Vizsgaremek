import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

export interface ITableColumn {
 title: string;
 key: string;
 hidden? : boolean;
 outputTransform?: any; 
 htmlOutput?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiURL: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "first_name", title: "First Name" }, 
    { key: "last_name", title: "Last Name" },
    { key: "birthDate", title: "Birthday"  },
    { key: "birthPlace", title: "Birthplace" },
    { key: "email", title: "Email Address" },
    { key: "address", title: "Street Address" }, 
    { key: "active", title: "Active", htmlOutput: ConfigService.activeSign },
    { key: "businessRelationship", title: "Business Relationship" }, 
    { key: "orders", title: "Orders" }
  ];

  productColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Product Name" }, 
    { key: "description", title: "Description" },
    { key: "price", title: "Price", outputTransform: (v: number) => `${v} Ft` },
    { key: "available", title: "Available",  htmlOutput: ConfigService.activeSign},
    { key: "storage", title: "Storage" }, 
    
  ];

  billColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Bill Identify" }, 
    { key: "grandTotal", title: "Grand Total", outputTransform: (v: number) => `${v} Ft`  },
    { key: "paid", title: "Paid", htmlOutput: ConfigService.activeSign  },
    { key: "customer", title: "Customer" },
    { key: "products", title: "Products" }, 
    
  ];

  orderColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "time", title: "Time of Order" }, 
    { key: "comment", title: "Comment" },
    { key: "active", title: "Active", htmlOutput: ConfigService.activeSign  },
    { key: "businessUser", title: "Business User" },
    { key: "transport", title: "Transport" }, 
    
  ];

  storageColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "name", title: "Storage Name" }, 
    { key: "place", title: "Place" },
    { key: "opened", title: "Opened" , htmlOutput: ConfigService.activeSign },
    { key: "products", title: "Products" }, 
    
  ];

  transportColumns: ITableColumn[] = [
    { key: "_id", title: "#" }, 
    { key: "travelBy", title: "Vehicle" }, 
    { key: "place", title: "Destination Place" },
    { key: "trustMember", title: "Responsible People"  },
    { key: "products", title: "Products" }, 
    { key: "startStorage", title: "Start Storage" }
    
  ];
  constructor() { }

  static activeSign(sign: boolean) : string {
    const icon: string = sign ? 'fa-check' : 'fa-ban';
    return `<i class= "fas ${icon}"></i>`; 
  } 
}

