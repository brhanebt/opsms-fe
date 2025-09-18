import { Component } from '@angular/core';
import { Payment } from '../../models/payment';
import { Backend } from '../../services/backend';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class PaymentComponent {

  payments: Payment[]=[];

  constructor(private backendService: Backend){
    backendService.getAllPayments().subscribe((p:Payment[])=>{
      this.payments=p;
      console.log(this.payments);
    })
  }

}
