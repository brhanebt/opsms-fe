import { Component } from '@angular/core';
import { Shipment } from '../../models/shipment';
import { Backend } from '../../services/backend';

@Component({
  selector: 'app-shipment',
  imports: [],
  templateUrl: './shipment.html',
  styleUrl: './shipment.css'
})
export class ShipmentComponent {

  shipments: Shipment[]=[];

  constructor(private backendService: Backend){
    backendService.getAllShipments().subscribe((shipments:Shipment[])=>{
      this.shipments=shipments;
      console.log(this.shipments);
    });
  }

}
