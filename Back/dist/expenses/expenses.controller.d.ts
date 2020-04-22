import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    getAll(): Promise<any[]>;
    getSumAlll(): void;
    save(expense: Expense): Promise<Expense>;
}
