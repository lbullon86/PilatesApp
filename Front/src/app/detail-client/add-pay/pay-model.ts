import { Client } from 'src/app/clientes/cliente';

export class Pay{

    public idInvoice:number;
    public concept:string;
    public quantity:number;
    public taxes:number;
    public dateInvoice:Date;
    public startDate:Date;
    public expirationDate:Date;
    public client:Client;
    public periodicity:number;
    
}