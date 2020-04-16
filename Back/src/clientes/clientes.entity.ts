import { MinLength, IsEmail } from "class-validator";
import { Invoice } from "src/invoice/invoice.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToOne} from "typeorm";
import { Company } from "src/company/company.entity";

@Entity('clientes')
export class Clients{
    @PrimaryGeneratedColumn()
    idClient:number;
    
    @Column({nullable:false})
    nameClient:string;
    
    @Column({nullable:false})
    surnameClient:string;

    @Column({nullable:false})
    dniClient:string;


    @Column({nullable:false})
    addressClient:string;

    @Column({nullable:false})
    @MinLength(9)
    phoneClient:string;

    @Column({nullable:false})
    @IsEmail()    
    emailClient:string;

    @Column({nullable:false})    
    birthDateClient:Date;

    @Column({ nullable:false })
    activeClient:boolean;

    @OneToMany(type=> Invoice, invoice=> invoice.client, {cascade:true})
    invoices: Invoice[]

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;

}