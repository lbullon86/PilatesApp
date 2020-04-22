import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { saddlebrown } from 'color-name';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {
    constructor (private readonly expensesService:ExpensesService){

    }
    @Get()
    getAll():Promise <any[]>{
        return this.expensesService.getAll()
    }
    @Get('/sumAll')
    getSumAlll(){
        return this.expensesService.getSumAllExpenses()
    }
    @Post()
    save(@Body() expense:Expense){
        return this.expensesService.save(expense)
    }

}
