import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    getAll(): Promise<any[]>;
    getSumAlll(): Promise<any>;
    getSumExpensesMonth(month: number, year: number): Promise<any>;
    getOneMonthByConcept(month: number, year: number): Promise<any[]>;
    getSumExpensesYear(id: number): Promise<any>;
    getSumExpensesDay(date: Date): Promise<any>;
    getSumExpensesPeriod(date: Date, date2: Date): Promise<any>;
    getSumExpensesOneQuarter(id: number, year: number): Promise<any>;
    getSumExpensesQuarter(year: number): Promise<import("./resumeExpense").ResumeExpense[]>;
    getSumAllMonthsOneYear(year: number): Promise<import("./resumeExpense").ResumeExpense[]>;
    save(expense: Expense): Promise<Expense>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
