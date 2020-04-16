import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';

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


}
