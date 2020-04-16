import { Controller, Get, Post, Body } from '@nestjs/common';
import { PayrollsService } from './payrolls.service';
import { Payrroll } from './payroll.entity';

@Controller('payrolls')
export class PayrollsController {
    constructor(private readonly payrrollService:PayrollsService){

    }
    @Get()       
    getAll(){
        return this.payrrollService.getAll()
    }

    @Post()
    save(@Body() payrroll :Payrroll){
        return this.payrrollService.save(payrroll);
    } 
}
