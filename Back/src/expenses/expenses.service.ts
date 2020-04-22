import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { numberLiteralTypeAnnotation } from '@babel/types';

@Injectable()
export class ExpensesService {
    constructor(@InjectRepository(Expense)private readonly repositoryExpense:Repository<Expense>){

    }
    getAll(){
        return this.repositoryExpense.find()
    }
    
    save(expense:Expense){
        return this.repositoryExpense.save(expense);

    }

    getSumAllExpenses(){
        let result:number
        
        // = this.repositoryExpense.createQueryBuilder().select("sum(expenses.quantity)","sum").getOne()
    }


}
