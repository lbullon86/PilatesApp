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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expense_entity_1 = require("./expense.entity");
const typeorm_2 = require("typeorm");
const resumeExpense_1 = require("./resumeExpense");
let ExpensesService = class ExpensesService {
    constructor(repositoryExpense) {
        this.repositoryExpense = repositoryExpense;
    }
    getAll() {
        return this.repositoryExpense.find();
    }
    save(expense) {
        expense.iva = expense.quantity - expense.quantity / expense.taxes;
        console.log(expense.quantity);
        return this.repositoryExpense.save(expense);
    }
    async getSumAllExpenses() {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .getRawOne();
        expense.sum = QueryeResult.sum;
        const QueryeResultIva = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.iva)', 'sumIva')
            .getRawOne();
        expense.sumIva = QueryeResultIva.sumIva;
        console.log(expense.sum);
        return expense;
    }
    async getSumAllExpensesMonth(monthSelect) {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .where('month(expenses.date)=:monthSelected', {
            monthSelected: monthSelect,
        })
            .getRawOne();
        const QueryeResultIva = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.iva)', 'sum')
            .where('month(expenses.date)=:monthSelected', {
            monthSelected: monthSelect,
        })
            .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;
    }
    async getSumAllExpensesYear(yearSelect) {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .where('year(expenses.date)=:monthSelected', {
            monthSelected: yearSelect,
        })
            .getRawOne();
        const QueryeResultIva = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.iva)', 'sumIva')
            .where('year(expenses.date)=:monthSelected', {
            monthSelected: yearSelect,
        })
            .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;
    }
    async getSumAllExpensesDay(dateExpense) {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .where('expenses.date=:dateExpenseSelected', {
            dateExpenseSelected: dateExpense,
        })
            .getRawOne();
        const QueryeResultIva = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.iva)', 'sumIva')
            .where('expenses.date=:dateExpenseSelected', {
            dateExpenseSelected: dateExpense,
        })
            .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;
    }
    async getSumAllExpensesPeriod(dateExpense, dateExpense2) {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .where('expenses.date BETWEEN :dateExpenseSelected AND  :dateExpenseSelected2', {
            dateExpenseSelected: dateExpense,
            dateExpenseSelected2: dateExpense2,
        })
            .getRawOne();
        const QueryeResultIva = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.iva)', 'sumIva')
            .where('expenses.date BETWEEN :dateExpenseSelected AND :dateExpenseSelected2', {
            dateExpenseSelected: dateExpense,
            dateExpenseSelected2: dateExpense2,
        })
            .getRawOne();
        expense.sum = QueryeResult.sum;
        expense.sumIva = QueryeResultIva.sumIva;
        return expense;
    }
    async getSumAllExpensesOneQuarter(quarter, yearSelected) {
        let expense = new resumeExpense_1.ResumeExpense();
        var QueryeResult, QueryeResultIva;
        switch (quarter) {
            case 1:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 1,
                    monthEnd: 3,
                    year: yearSelected,
                })
                    .getRawOne();
                QueryeResultIva = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 1,
                    monthEnd: 3,
                    year: yearSelected,
                })
                    .getRawOne();
                expense.sum = QueryeResult.sum;
                expense.sumIva = QueryeResultIva.sumIva;
                return expense;
            case 2:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 4,
                    monthEnd: 6,
                    year: yearSelected,
                })
                    .getRawOne();
                QueryeResultIva = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 4,
                    monthEnd: 6,
                    year: yearSelected,
                })
                    .getRawOne();
                expense.sum = QueryeResult.sum;
                expense.sumIva = QueryeResultIva.sumIva;
                return expense;
            case 3:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 7,
                    monthEnd: 9,
                    year: yearSelected,
                })
                    .getRawOne();
                QueryeResultIva = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 7,
                    monthEnd: 9,
                    year: yearSelected,
                })
                    .getRawOne();
                expense.sum = QueryeResult.sum;
                expense.sumIva = QueryeResultIva.sumIva;
                return expense;
            case 4:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 10,
                    monthEnd: 12,
                    year: yearSelected,
                })
                    .getRawOne();
                QueryeResultIva = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 10,
                    monthEnd: 12,
                    year: yearSelected,
                })
                    .getRawOne();
                expense.sum = QueryeResult.sum;
                expense.sumIva = QueryeResultIva.sumIva;
                return expense;
            default:
                break;
        }
    }
    async getSumAllMonthsOneYear(yearSelected) {
        var count = 1;
        var allMonths;
        allMonths = [];
        while (count < 13) {
            let expense = new resumeExpense_1.ResumeExpense();
            const QueryeResult = await this.repositoryExpense
                .createQueryBuilder('expenses')
                .select('sum(expenses.quantity)', 'sum')
                .where('month(expenses.date) =:month and year(expenses.date) =:year', {
                month: count,
                year: yearSelected,
            })
                .getRawOne();
            const QueryeResultIva = await this.repositoryExpense
                .createQueryBuilder('expenses')
                .select('sum(expenses.iva)', 'sumIva')
                .where('month(expenses.date) =:month AND year(expenses.date) =:year', {
                month: count,
                year: yearSelected,
            })
                .getRawOne();
            expense.sum = QueryeResult.sum;
            expense.sumIva = QueryeResultIva.sumIva;
            allMonths.push(expense);
            count++;
        }
        return allMonths;
    }
    async getSumAllQuartersOneYear(yearSelected) {
        var count = 1;
        var allMonths;
        allMonths = [];
        while (count < 13) {
            let expense = new resumeExpense_1.ResumeExpense();
            const QueryeResult = await this.repositoryExpense
                .createQueryBuilder('expenses')
                .select('sum(expenses.quantity)', 'sum')
                .where('month(expenses.date) between :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                monthBegin: count,
                monthEnd: count + 2,
                year: yearSelected,
            })
                .getRawOne();
            const QueryeResultIva = await this.repositoryExpense
                .createQueryBuilder('expenses')
                .select('sum(expenses.iva)', 'sumIva')
                .where('month(expenses.date) between :monthBegin AND :monthEnd AND year(expenses.date) =:year', {
                monthBegin: count,
                monthEnd: count + 2,
                year: yearSelected,
            })
                .getRawOne();
            expense.sum = QueryeResult.sum;
            expense.sumIva = QueryeResultIva.sumIva;
            count = count + 3;
            allMonths.push(expense);
        }
        return allMonths;
    }
    getOne(id) {
        return this.repositoryExpense.findOne(id);
    }
    updateExpense(expense) {
        return this.repositoryExpense.update(expense.idExpense, expense);
    }
    deleteExpense(idExpense) {
        return this.repositoryExpense.delete(idExpense);
    }
};
ExpensesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(expense_entity_1.Expense)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExpensesService);
exports.ExpensesService = ExpensesService;
//# sourceMappingURL=expenses.service.js.map