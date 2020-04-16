import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Company } from "src/company/company.entity";



@Entity('prices')
export class Prices{
    @PrimaryGeneratedColumn()
    idPrice:number;

    @Column()
    name:string;

    @Column()
    price:number;
    

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;
}