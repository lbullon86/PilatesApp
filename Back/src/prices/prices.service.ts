import { Injectable, Get } from '@nestjs/common';
import { Prices } from './prices.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class PricesService {
    constructor(@InjectRepository(Prices)private readonly repositoryPrices:Repository<Prices>){

        }

        getAll(){
            return this.repositoryPrices.find();
        }
        save(price:Prices){
            return this.repositoryPrices.save(price);
        }

    
}
