import { Expense } from './expense.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ResumeExpense } from './resumeExpense';
export declare class ExpensesService {
    private readonly repositoryExpense;
    constructor(repositoryExpense: Repository<Expense>);
    getAll(): Promise<Expense[]>;
    save(expense: Expense): Promise<Expense>;
    getSumAllExpenses(): Promise<ResumeExpense>;
    getSumAllExpensesMonth(monthSelect: number): Promise<ResumeExpense>;
    getSumAllExpensesYear(yearSelect: number): Promise<ResumeExpense>;
    getSumAllExpensesDay(dateExpense: Date): Promise<ResumeExpense>;
    getSumAllExpensesPeriod(dateExpense: Date, dateExpense2: Date): Promise<ResumeExpense>;
    getSumAllExpensesOneQuarter(quarter: number, yearSelected: number): Promise<ResumeExpense>;
    getSumAllMonthsOneYear(yearSelected: number): Promise<ResumeExpense[]>;
    getSumAllQuartersOneYear(yearSelected: number): Promise<ResumeExpense[]>;
    getOne(id: number): Promise<Expense>;
    updateExpense(expense: Expense): Promise<UpdateResult>;
    deleteExpense(idExpense: number): Promise<import("typeorm").DeleteResult>;
}
