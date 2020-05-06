import { Controller, ParseIntPipe, Get, Param, Post, Body } from '@nestjs/common';
import { PricesService } from './prices.service';
import { Prices } from './prices.entity';

@Controller('api/prices')
export class PricesController {
    constructor(private readonly priceService:PricesService){

    }
    @Get()
    getOne():Promise<Prices[]>{
        return this.priceService.getAll()
        
    }
    @Post()
    save(@Body() price:Prices){
        return this.priceService.save(price)
        
    }
}
