import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Balance } from './balance';

@Controller('balance')
export class BalanceController {
    constructor (private readonly balanceService:BalanceService){}

    @Get()
    getBalance():Promise<Balance>{
        return this.balanceService.getBalanceGlobal() 
    }
    @Get('months/:year/')
    getBalanceMonthsOneYear(@Param('year',ParseIntPipe) year:number):Promise<Balance[]>{
        return this.balanceService.getBalanceMonthsOneYear(year);
    }
    @Get(':year')
    getBalanceYear(@Param('year',ParseIntPipe) year:number):Promise<Balance>{
        return this.balanceService.getBalanceYear(year) 
    }

    @Get(':year/:month')
    getBalanceOneMonth(@Param('year',ParseIntPipe) year:number, @Param('month', ParseIntPipe) month:number):Promise<Balance>{
        return this.balanceService.getBalanceOneMonth(year, month) 
    }

  

}
