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
    //const uri = "https://excel2json.io/api/share/526013567ff446b0ae0a30ece9cedd71";

    const uri = "https://excel2json.io/api/share/de91435ece444635a9768cc507d82cd4";

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





/* import { Injectable } from '@angular/core';
import { Northwind } from './northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  getData(tableName: string): any[] {
    return Northwind[tableName];
  }

  getOrders(customerId: string): any[] {
    return Northwind["Orders"].filter(order => order.customerID == customerId);
  }
}
*/
