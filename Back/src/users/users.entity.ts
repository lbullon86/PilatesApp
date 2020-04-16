
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne} from 'typeorm';
import { Company } from 'src/company/company.entity';


@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    idUser:number;

    @Column({nullable:false})
    nameUser:string;

    @Column({nullable:false})
    passUser:string;

    @Column({nullable:false})
    rolUser:number

    @ManyToOne(type=>Company, company=> company.id)
    company: Company;
}

