import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order';
import { ShipmentComponent } from './components/shipment/shipment';
import { PaymentComponent } from './components/payment/payment';

export const routes: Routes = [
    {path: 'orders', component: OrderComponent},
    {path: 'shipments', component: ShipmentComponent},
    {path: 'payments', component: PaymentComponent},
    {path:'', redirectTo: 'orders', pathMatch: 'full'}
];
