import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs/internal/Observable';
import { Shipment } from '../models/shipment';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class Backend {

  url: string="http://localhost:8181/api/";

  constructor(private http: HttpClient){

  }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url+"orders");
  }


  getAllShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.url+"shipments");
  }

  getAllPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.url+"payments");
  }
  
}
