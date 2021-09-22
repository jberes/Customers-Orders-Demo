import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.scss']
})
export class CustomersOrdersComponent implements OnInit {
  public northwindCustomers: any[] = [];
  public northwindOrders: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
    });
  }

  rowSelected(selection: any) {
    const customerId = selection[0].CustomerID;
    this.northwindService.getOrders(customerId).subscribe(data => {
      this.northwindOrders = data;
    });
  }
}

/* import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-customers-orders',
  templateUrl: './customers-orders.component.html',
  styleUrls: ['./customers-orders.component.scss']
})
export class CustomersOrdersComponent implements OnInit {
  public northwindCustomers: any[] = [];
  public northwindOrders: any[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    //this.northwindCustomers = this.northwindService.getData('Customers');
    //this.northwindOrders = this.northwindService.getData('Orders');

    this.northwindService.getCustomers().subscribe(data => {
      this.northwindCustomers = data;
    });
  }

    rowSelected(selection: any){
      const customerId = selection[0].customerID;
      //this.northwindOrders = this.northwindService.getOrders(customerId);
      this.northwindService.getOrders(customerId).subscribe(data => {
        this.northwindOrders = data;
      });
    }
}
*/
