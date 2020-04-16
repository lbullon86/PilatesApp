import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Payrroll } from './payroll.entity'

@Injectable()
export class PayrollsService {
    constructor(@InjectRepository(Payrroll) private readonly repositoryPayrroll:Repository<Payrroll>){

    }
    getAll(){
        return this.repositoryPayrroll.find()
    }
    
    save(payrroll:Payrroll){
        return this.repositoryPayrroll.save(payrroll);

    }

}
