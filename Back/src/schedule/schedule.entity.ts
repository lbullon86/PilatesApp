import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, OneToOne, JoinColumn} from 'typeorm';


@Entity('schedule')
export class Schedule{

    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:false})
    activity:string
    @Column({nullable:false})
    day:number
    @Column({type:"time",nullable:false})
    hour:Date
}
