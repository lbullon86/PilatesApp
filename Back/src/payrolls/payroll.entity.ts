import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Company } from 'src/company/company.entity';


@Entity('payroll')
export class Payrroll{

    @PrimaryGeneratedColumn()
    idPayrroll:number


    @Column({nullable:false})
    quantity:number

    @Column()
    date:Date

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;
}