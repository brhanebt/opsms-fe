import { Component } from '@angular/core';
import { Backend } from '../../services/backend';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class OrderComponent {

  orders: Order[] = [];
  ordersTableHeaders: string[]=["No.","Name","Quantity","Price","Status"];

  constructor(private backendService: Backend){
      backendService.getAllOrders().subscribe((orders:Order[])=>{
        this.orders=orders;
        console.log(orders);
      })
  }

}
