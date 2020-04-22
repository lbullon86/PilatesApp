import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
export declare class ExpensesService {
    private readonly repositoryExpense;
    constructor(repositoryExpense: Repository<Expense>);
    getAll(): Promise<Expense[]>;
    save(expense: Expense): Promise<Expense>;
    getSumAllExpenses(): void;
}
