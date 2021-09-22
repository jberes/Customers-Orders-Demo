import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CustomersOrdersComponent } from './customers-orders/customers-orders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'customers-orders', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'customers-orders', component: CustomersOrdersComponent, data: { text: 'Customers-Orders' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
