# customer-orders-demo

This project was generated with [Indigo.Design App Builder Code Gen](https://www.infragistics.com/products/indigo-design/app-builder).

## Development server

Run `ig start` to build the application, start a web server and open the application in the default browser. Then navigate to `http://localhost:4200/`. Default serving port can be configured in `ignite-ui-cli.json` via `defaultPort` property.

## Build

Run `ig build` to build the application into an output directory.

## Running unit tests

Run `ig test` to execute the unit tests via [Karma](https://karma-runner.github.io). Runs all `.spec.ts` files under `./src` folder.

## Running end-to-end tests

Run `ig test --e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Runs all `.e2e-spec.ts` files under `e2e` folder.





Northwind Customers
--------------------
https://excel2json.io/api/share/de91435ece444635a9768cc507d82cd4

Northwind Orders
-----------------
https://excel2json.io/api/share/05155b3096a74a66a36697a59276b969


Add the Grid in HTML
---------------------
rowSelection="single" [hideRowSelectors]="true" (rowSelected)="rowSelected($event.newSelection)"  


Add to Code Behind for Grid
----------------------------
    rowSelected(selection: any){
      const customerId = selection[0].CustomerID;
      this.northwindOrders = this.northwindService.getOrders(customerId);
    }

Add Get Orders to NorthwindService.ts
--------------------------------------
  getOrders(customerId: string): any[] {
    return Northwind["Orders"].filter(order => order.CustomerID == customerId);
  }
// check casing

that's for a basic demo, now we add Remote Data

Add northwind.service.remote.ts

Add this code:

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Northwind } from './northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  customers: any[] = [];
  orders: any[] = [];
  
  constructor(private http: HttpClient) {
    
  }

  getData(tableName: string): any[] {
    return Northwind[tableName];
  }

  getCustomers(): Observable<any> {
    const uri = "https://excel2json.io/api/share/dcb51ae600934ecf93c02c9ffcda3c6f";
    if (this.customers.length === 0) {
      return this.http.get<any[]>(uri).pipe(
        tap(data => this.customers = data)
      );
    }
    else {
      return of(this.customers);
    }    
  }

  getOrders(customerId: string): Observable<any> {
    const uri = "https://excel2json.io/api/share/526013567ff446b0ae0a30ece9cedd71";    
    if (this.orders.length === 0) {
      return this.http.get<any[]>(uri).pipe(
        tap(data => this.orders = data),
        map(data => data.filter(order => order.CustomerID === customerId))
        );
    }
    else
    {
      let data: any[] = this.orders.filter(order => order.CustomerID === customerId);
      return of(data);
    }
  }
}



Import HTTP Client in the App.Modules.ts
-----------------------------------------
import { HttpClientModule } from '@angular/common/http';

and add HttpClientModule to the Imports


Import the new NorthwindService in the code behind for customers-orders.component.ts
-------------------------------------------------------------------------------------
import { NorthwindService } from '../services/northwind.service.remote';


Replace ngOnInit in the code behind for customers-orders.component.ts
----------------------------------------------------------------------
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
    });

Replace the GetOrders call in rowSelected
-----------------------------------------
    this.northwindService.getOrders(customerId).subscribe(data => {
      this.northwindOrders = data;
    });
