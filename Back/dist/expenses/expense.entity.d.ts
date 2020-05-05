import { Company } from 'src/company/company.entity';
export declare class Expense {
    idExpense: number;
    concept: string;
    quantity: number;
    taxes: number;
    date: Date;
    iva: number;
    company: Company;
    month: number;
}
