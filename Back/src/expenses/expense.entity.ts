import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Company } from 'src/company/company.entity';

@Entity('expenses')
export class Expense{

    @PrimaryGeneratedColumn()
    idExpense:number

    @Column({nullable:false})
    concept:string

    @Column({type:'decimal', precision:10, scale:2})
    quantity:number

    @Column({type:'decimal', precision:8, scale:2})
    taxes:number

    @Column()
    date:Date

    @Column({type:'decimal', precision:8, scale:2})
    iva:number;

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;

    month:number;

}