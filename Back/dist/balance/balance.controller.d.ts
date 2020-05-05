import { BalanceService } from './balance.service';
import { Balance } from './balance';
export declare class BalanceController {
    private readonly balanceService;
    constructor(balanceService: BalanceService);
    getBalance(): Promise<Balance>;
    getBalanceMonthsOneYear(year: number): Promise<Balance[]>;
    getBalanceYear(year: number): Promise<Balance>;
    getBalanceOneMonth(year: number, month: number): Promise<Balance>;
}
