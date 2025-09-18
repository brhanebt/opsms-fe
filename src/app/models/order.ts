export interface Order{
    id:number;
    product:string;
    quantity:number;
    price:number;
    status:OrderStatus;
}