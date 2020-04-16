import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne} from 'typeorm';
import { MinLength} from "class-validator";
import { Clients } from 'src/clientes/clientes.entity';
import { Users } from 'src/users/users.entity';
import { Expense } from 'src/expenses/expense.entity';
import { Payrroll } from 'src/payrolls/payroll.entity';
import { Prices } from 'src/prices/prices.entity';

@Entity('company')
export class Company {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false })
    @MinLength(3)
    name:string;
    
    @Column()
    nif:string;
    
    @Column()
    address:string

    @OneToMany(type=> Clients, client =>client.idClient)
    clients:Clients;

    @OneToMany(type=>Users,user=> user.idUser)
    user:Users;

    @OneToMany(type=>Expense, expense=> expense.idExpense)
    expense:Expense;

    @OneToMany(type=>Payrroll, payroll=> payroll.idPayrroll)
    payroll:Payrroll;

    @OneToMany(type=>Prices, prices=>prices.idPrice)
    price:Prices;


}