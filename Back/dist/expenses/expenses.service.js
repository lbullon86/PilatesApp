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
const invoice_service_1 = require("../invoice/invoice.service");
const util_1 = require("util");
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
    async getSumAllExpensesDay(dateExpense) {
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .addSelect('sum(expenses.iva)', 'sumIva')
            .where('expenses.date=:dateExpenseSelected', {
            dateExpenseSelected: dateExpense,
        })
            .getRawOne();
        return QueryeResult;
    }
    async getSumAllExpensesPeriod(dateExpense, dateExpense2) {
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .addSelect('sum(expenses.iva)', 'sumIva')
            .where('expenses.date BETWEEN :dateExpenseSelected AND  :dateExpenseSelected2', {
            dateExpenseSelected: dateExpense,
            dateExpenseSelected2: dateExpense2,
        })
            .getRawOne();
        return QueryeResult;
    }
    async getSumAllExpensesOneMonth(yearSelected, monthSelect) {
        let expense = new resumeExpense_1.ResumeExpense();
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .addSelect('sum(expenses.iva)', 'sumIva')
            .where('month(expenses.date)=:month and year(expenses.date)=:year', {
            month: monthSelect,
            year: yearSelected,
        })
            .getRawOne();
        return QueryeResult;
    }
    async getOneMonthsByConcept(yearSelected, month) {
        const queryResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'quantity')
            .addSelect('expenses.concept', 'concept')
            .addSelect('sum(expenses.iva)', 'iva')
            .where('month(expenses.date)=:month and year(expenses.date)=:year', {
            month: month,
            year: yearSelected,
        })
            .groupBy('expenses.concept')
            .orderBy('quantity', 'DESC')
            .getRawMany();
        return queryResult;
    }
    async getSumAllMonthsOneYear(yearSelected) {
        var count = 1;
        var allMonths;
        allMonths = [];
        while (count < 13) {
            var expense = await this.getSumAllExpensesOneMonth(yearSelected, count);
            expense.month = count;
            expense = this.getIsNull(expense);
            allMonths.push(expense);
            count++;
            console.log(expense);
        }
        return allMonths;
    }
    async getQuartersByMonths(year, quarter) {
        var QueryResult;
        var allMonths = [];
        switch (quarter) {
            case 1:
                for (let index = 1; index < 4; index++) {
                    QueryResult = await this.getSumAllExpensesOneMonth(year, index);
                    QueryResult.month = index;
                    allMonths.push(QueryResult);
                }
                break;
            case 2:
                for (let index = 3; index < 7; index++) {
                    QueryResult = await this.getSumAllExpensesOneMonth(year, index);
                    QueryResult.month = index;
                    allMonths.push(QueryResult);
                }
                break;
            case 3:
                for (let index = 6; index < 10; index++) {
                    QueryResult = await this.getSumAllExpensesOneMonth(year, index);
                    QueryResult.month = index;
                    allMonths.push(QueryResult);
                }
                break;
            case 4:
                for (let index = 10; index < 13; index++) {
                    QueryResult = await this.getSumAllExpensesOneMonth(year, index);
                    QueryResult.month = index;
                    allMonths.push(QueryResult);
                }
                break;
            default:
                break;
        }
        return allMonths;
    }
    async getSumAllExpensesOneQuarter(quarter, yearSelected) {
        var QueryeResult;
        switch (quarter) {
            case 1:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .addSelect('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 1,
                    monthEnd: 3,
                    year: yearSelected,
                })
                    .getRawOne();
                return QueryeResult;
            case 2:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .addSelect('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 4,
                    monthEnd: 6,
                    year: yearSelected,
                })
                    .getRawOne();
                return QueryeResult;
            case 3:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .addSelect('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 7,
                    monthEnd: 9,
                    year: yearSelected,
                })
                    .getRawOne();
                return QueryeResult;
            case 4:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'sum')
                    .addSelect('sum(expenses.iva)', 'sumIva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 10,
                    monthEnd: 12,
                    year: yearSelected,
                })
                    .getRawOne();
                return QueryeResult;
            default:
                break;
        }
    }
    async getQuartersByConcept(quarter, yearSelected) {
        var QueryeResult;
        switch (quarter) {
            case 1:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'quantity')
                    .addSelect('expenses.concept', 'concept')
                    .addSelect('sum(expenses.iva)', 'iva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 1,
                    monthEnd: 3,
                    year: yearSelected,
                })
                    .groupBy('expenses.concept')
                    .orderBy('quantity', 'DESC')
                    .getRawMany();
                return QueryeResult;
            case 2:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'quantity')
                    .addSelect('expenses.concept', 'concept')
                    .addSelect('sum(expenses.iva)', 'iva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 4,
                    monthEnd: 6,
                    year: yearSelected,
                })
                    .groupBy('expenses.concept')
                    .orderBy('quantity', 'DESC')
                    .getRawMany();
                return QueryeResult;
            case 3:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'quantity')
                    .addSelect('expenses.concept', 'concept')
                    .addSelect('sum(expenses.iva)', 'iva')
                    .where('month(expenses.date) BETWEEN :monthBegin  AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 7,
                    monthEnd: 9,
                    year: yearSelected,
                })
                    .groupBy('expenses.concept')
                    .orderBy('quantity', 'DESC')
                    .getRawMany();
                return QueryeResult;
            case 4:
                QueryeResult = await this.repositoryExpense
                    .createQueryBuilder('expenses')
                    .select('sum(expenses.quantity)', 'quantity')
                    .addSelect('expenses.concept', 'concept')
                    .addSelect('sum(expenses.iva)', 'iva')
                    .where('month(expenses.date) BETWEEN :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                    monthBegin: 10,
                    monthEnd: 12,
                    year: yearSelected,
                })
                    .groupBy('expenses.concept')
                    .orderBy('quantity', 'DESC')
                    .getRawMany();
                return QueryeResult;
            default:
                break;
        }
    }
    async getSumAllExpensesYear(yearSelect) {
        var QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .addSelect('sum(expenses.iva)', 'sumIva')
            .where('year(expenses.date)=:monthSelected', {
            monthSelected: yearSelect,
        })
            .getRawOne();
        return QueryeResult;
    }
    getIsNull(number) {
        for (const key in number) {
            if (util_1.isNull(number[key])) {
                number[key] = 0;
            }
        }
        return number;
    }
    async getSumAllExpenses() {
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'sum')
            .addSelect('sum(expenses.iva)', 'sumIva')
            .getRawOne();
        return QueryeResult;
    }
    async getSumAllExpensesByConcept(yearSelected) {
        const QueryeResult = await this.repositoryExpense
            .createQueryBuilder('expenses')
            .select('sum(expenses.quantity)', 'quantity')
            .addSelect('expenses.concept', 'concept')
            .addSelect('sum(expenses.iva)', 'iva')
            .where('year(expenses.date)=:year', {
            year: yearSelected,
        })
            .groupBy('expenses.concept')
            .orderBy('quantity', 'DESC')
            .getRawMany();
        return QueryeResult;
    }
    async getSumAllQuartersOneYear(yearSelected) {
        var count = 1;
        var allMonths;
        allMonths = [];
        while (count < 13) {
            const QueryeResult = await this.repositoryExpense
                .createQueryBuilder('expenses')
                .select('sum(expenses.quantity)', 'sum')
                .addSelect('sum(expenses.iva)', 'sumIva')
                .where('month(expenses.date) between :monthBegin AND :monthEnd and year(expenses.date) =:year', {
                monthBegin: count,
                monthEnd: count + 2,
                year: yearSelected,
            })
                .getRawOne();
            count = count + 3;
            allMonths.push(QueryeResult);
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