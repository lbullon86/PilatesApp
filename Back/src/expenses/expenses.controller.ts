import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete, Query } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { saddlebrown } from 'color-name';
import { Expense } from './expense.entity';
import { get } from 'https';
import { UpdateResult } from 'typeorm';
import { from } from 'rxjs';

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

    @Get(':id/month')
    getSumExpensesMonth(@Param('id', ParseIntPipe) id:number){
        return this.expensesService.getSumAllExpensesMonth(id)
    }
    @Get(':id/year')
    getSumExpensesYear(@Param('id', ParseIntPipe) id:number){
        return this.expensesService.getSumAllExpensesYear(id)
    }
    @Get(':date/day')
    getSumExpensesDay(@Param('date') date:Date){
        return this.expensesService.getSumAllExpensesDay(date)
    }
    @Get('/period')
    getSumExpensesPeriod(@Query('from') date:Date, @Query('to') date2:Date){
        return this.expensesService.getSumAllExpensesPeriod(date,date2)
    }
    @Get(':id/Onequarter/:year')
    getSumExpensesOneQuarter(@Param('id', ParseIntPipe) id:number, @Param('year',ParseIntPipe) year:number) {
        return this.expensesService.getSumAllExpensesOneQuarter(id, year)
    }
    @Get('/quarter/:year')
    getSumExpensesQuarter(@Param('year',ParseIntPipe) year:number) {
        return this.expensesService.getSumAllQuartersOneYear( year)
    }
    @Get('/months/:year')
    getSumAllMonthsOneYear(@Param('year', ParseIntPipe) year:number){
        return this.expensesService.getSumAllMonthsOneYear(year)
    }

    @Post()
    save(@Body() expense:Expense){
        return this.expensesService.save(expense)
    }

    @Get(':id')
    getOneExpense(@Param('id', ParseIntPipe) id:number): Promise<Expense>{
        return this.expensesService.getOne(id);

    }

    @Put(':id/update')
    update(@Param('id', ParseIntPipe) id:number,
    @Body() expense:Expense): Promise<UpdateResult>{
        return this.expensesService.updateExpense(expense);
    }

    @Delete(':id/delete')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.expensesService.deleteExpense(id);
    }

  

}
