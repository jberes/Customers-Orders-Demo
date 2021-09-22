import { Injectable } from '@angular/core';
import { FullNorthwindCustomers } from './full-northwind-customers';

@Injectable({
  providedIn: 'root'
})
export class FullNorthwindCustomersService {
  getData(tableName: string): any[] {
    return FullNorthwindCustomers[tableName];
  }
}
