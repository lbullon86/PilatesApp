import { Expense } from './expense.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ResumeExpense } from './resumeExpense';
export declare class ExpensesService {
    private readonly repositoryExpense;
    constructor(repositoryExpense: Repository<Expense>);
    getAll(): Promise<Expense[]>;
    save(expense: Expense): Promise<Expense>;
    getSumAllExpensesDay(dateExpense: Date): Promise<any>;
    getSumAllExpensesPeriod(dateExpense: Date, dateExpense2: Date): Promise<any>;
    getSumAllExpensesOneMonth(yearSelected: number, monthSelect: number): Promise<any>;
    getOneMonthsByConcept(yearSelected: number, month: number): Promise<any[]>;
    getSumAllMonthsOneYear(yearSelected: number): Promise<ResumeExpense[]>;
    getSumAllExpensesOneQuarter(quarter: number, yearSelected: number): Promise<any>;
    getSumAllExpensesYear(yearSelect: number): Promise<any>;
    getIsNull(number: any): any;
    getSumAllExpenses(): Promise<any>;
    getSumAllQuartersOneYear(yearSelected: number): Promise<ResumeExpense[]>;
    getOne(id: number): Promise<Expense>;
    updateExpense(expense: Expense): Promise<UpdateResult>;
    deleteExpense(idExpense: number): Promise<import("typeorm").DeleteResult>;
}
