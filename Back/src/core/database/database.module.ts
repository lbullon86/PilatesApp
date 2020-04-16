import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import * as config from '../../database.config';


@Module({
    imports:[
        TypeOrmModule.forRoot(config)
    ]
})
export class DatabaseModule {
    constructor(private readonly connection:Connection){}
}
