import { PaymentStatus } from "./paymentstatus";

export type Payment = {

    id:number;
    orderId:string;
    amount:number;
    status:PaymentStatus;
}