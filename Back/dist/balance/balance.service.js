"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const balance_1 = require("./balance");
const expenses_service_1 = require("../expenses/expenses.service");
const invoice_service_1 = require("../invoice/invoice.service");
const invoicing_model_1 = require("../invoice/invoicing-model");
const resumeExpense_1 = require("../expenses/resumeExpense");
let BalanceService = class BalanceService {
    constructor(serviceInvoice, serviceExpense) {
        this.serviceInvoice = serviceInvoice;
        this.serviceExpense = serviceExpense;
    }
    async getBalanceGlobal() {
        const balance = new balance_1.Balance();
        const sum = await this.serviceInvoice.getInvoicing();
        const sumIva = sum.sum - sum.sum / 1.21;
        const sumIrpf = (sum.sum / 1.21) * 0.2;
        const sumExpense = await this.serviceExpense.getSumAllExpenses();
        balance.sum = Math.round(sum.sum - sumExpense.sum - (sumIva - sumExpense.sumIva) - sumIrpf);
        return balance;
    }
    getBalance(invoicing, expenses) {
        const balance = new balance_1.Balance();
        const sumIva = invoicing.sum - invoicing.sum / 1.21;
        const sumIrpf = (invoicing.sum - sumIva) * 0.2;
        balance.sum = Math.round(invoicing.sum - expenses.sum - (sumIva - expenses.sumIva) - sumIrpf);
        return balance;
    }
    async getBalanceYear(year) {
        return this.getBalance(await this.serviceInvoice.getInvoicingYear(year), await this.serviceExpense.getSumAllExpensesYear(year));
    }
    async getBalanceOneMonth(year, month) {
        return this.getBalance(await this.serviceInvoice.getInvoicingOneMonth(year, month), await this.serviceExpense.getSumAllExpensesOneMonth(year, month));
    }
    async getBalanceMonthsOneYear(year) {
        var balanceYear = [];
        const invoicing = await this.serviceInvoice.getInvoicingOneYearAllMonths(year);
        const expenses = await this.serviceExpense.getSumAllMonthsOneYear(year);
        for (let index = 0; index < 12; index++) {
            balanceYear.push(this.getBalance(invoicing[index], expenses[index]));
            balanceYear[index].month = index + 1;
        }
        return balanceYear;
    }
};
BalanceService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService,
        expenses_service_1.ExpensesService])
], BalanceService);
exports.BalanceService = BalanceService;
//# sourceMappingURL=balance.service.js.map