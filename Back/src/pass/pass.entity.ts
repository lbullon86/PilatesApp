import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Invoice } from 'src/invoice/invoice.entity';


@Entity('pass')
export class Pass{

    @PrimaryGeneratedColumn()
    idPass:number

    @Column({nullable:false})
    numberClasses:number


    @Column("simple-array")
    dates:Date[];


}