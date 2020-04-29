import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';
import { UpdateResult } from 'typeorm';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    getAll(): Promise<any[]>;
    getSumAlll(): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesMonth(id: number): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesYear(id: number): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesDay(date: Date): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesPeriod(date: Date, date2: Date): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesOneQuarter(id: number, year: number): Promise<import("./resumeExpense").ResumeExpense>;
    getSumExpensesQuarter(year: number): Promise<import("./resumeExpense").ResumeExpense[]>;
    getSumAllMonthsOneYear(year: number): Promise<import("./resumeExpense").ResumeExpense[]>;
    save(expense: Expense): Promise<Expense>;
    getOneExpense(id: number): Promise<Expense>;
    update(id: number, expense: Expense): Promise<UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
