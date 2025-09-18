import { ShipmentStatus } from "./shipmentstatus";

export type Shipment={
    id:number;
    orderId:string;
    shipmentDate:string;
    status:ShipmentStatus;
}