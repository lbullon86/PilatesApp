import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Company } from 'src/company/company.entity';


@Entity('expenses')
export class Expense{

    @PrimaryGeneratedColumn()
    idExpense:number

    @Column({nullable:false})
    concept:string

    @Column({nullable:false})
    quantity:number

    @Column({nullable:false})
    taxes:number

    @Column({nullable:false})
    date:Date

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;

}