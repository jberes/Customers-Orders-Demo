import { Component, OnInit } from '@angular/core';
import { FullNorthwindCustomersService } from '../services/full-northwind-customers.service';
import { FullNorthwindOrdersService } from '../services/full-northwind-orders.service';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.scss']
})
export class CustomersOrdersComponent implements OnInit {
  public fullNorthwindCustomersCustomers: any[] = [];
  public fullNorthwindOrdersOrders: any[] = [];

  constructor(
    private fullNorthwindCustomersService: FullNorthwindCustomersService,
    private fullNorthwindOrdersService: FullNorthwindOrdersService,
  ) {}

  ngOnInit() {
    this.fullNorthwindCustomersCustomers = this.fullNorthwindCustomersService.getData('Customers');
    this.fullNorthwindOrdersOrders = this.fullNorthwindOrdersService.getData('Orders');
  }
}
