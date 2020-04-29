import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, OneToOne, JoinColumn} from 'typeorm';
import { Clients } from 'src/clientes/clientes.entity';
import { Pass } from 'src/pass/pass.entity';


@Entity('invoices')
export class Invoice{

    @PrimaryGeneratedColumn()
    idInvoice:number

    @Column({nullable:false})
    concept:string

    @Column({type:'decimal', precision:5,scale:2,nullable:false, default:0})
    quantity:number

    @Column({type:'decimal' ,nullable:false})
    taxes:number

    @Column({nullable:false})
    dateInvoice:Date

    @Column({nullable:false})
    startDate:Date

    @Column({nullable:false})
    expirationDate:Date

    @Column({nullable:false})
    periodicity:number;

    @Column({nullable:false})
    paymentMethod:number; 
    
    @ManyToOne(type=>Clients, client=> client.invoices)
    client: Clients;

    @OneToOne(type=>Pass, {cascade:true})
    @JoinColumn()
    pass?:Pass;



}