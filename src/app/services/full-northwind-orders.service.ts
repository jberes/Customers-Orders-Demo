import { Injectable } from '@angular/core';
import { FullNorthwindOrders } from './full-northwind-orders';

@Injectable({
  providedIn: 'root'
})
export class FullNorthwindOrdersService {
  getData(tableName: string): any[] {
    return FullNorthwindOrders[tableName];
  }
}
