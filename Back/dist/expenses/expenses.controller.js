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
const expenses_service_1 = require("./expenses.service");
const expense_entity_1 = require("./expense.entity");
let ExpensesController = class ExpensesController {
    constructor(expensesService) {
        this.expensesService = expensesService;
    }
    getAll() {
        return this.expensesService.getAll();
    }
    getSumAlll() {
        return this.expensesService.getSumAllExpenses();
    }
    getSumExpensesMonth(month, year) {
        return this.expensesService.getSumAllExpensesOneMonth(year, month);
    }
    getOneMonthByConcept(month, year) {
        return this.expensesService.getOneMonthsByConcept(year, month);
    }
    getSumExpensesYear(id) {
        return this.expensesService.getSumAllExpensesYear(id);
    }
    getSumExpensesDay(date) {
        return this.expensesService.getSumAllExpensesDay(date);
    }
    getSumExpensesPeriod(date, date2) {
        return this.expensesService.getSumAllExpensesPeriod(date, date2);
    }
    getSumExpensesOneQuarter(id, year) {
        return this.expensesService.getSumAllExpensesOneQuarter(id, year);
    }
    getSumExpensesQuarter(year) {
        return this.expensesService.getSumAllQuartersOneYear(year);
    }
    getSumAllMonthsOneYear(year) {
        return this.expensesService.getSumAllMonthsOneYear(year);
    }
    save(expense) {
        return this.expensesService.save(expense);
    }
    delete(id) {
        return this.expensesService.deleteExpense(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpensesController.prototype, "getAll", null);
__decorate([
    common_1.Get('/sumAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumAlll", null);
__decorate([
    common_1.Get('/month/:year/:month'),
    __param(0, common_1.Param('month', common_1.ParseIntPipe)), __param(1, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesMonth", null);
__decorate([
    common_1.Get('/oneMonth/:year/:month'),
    __param(0, common_1.Param('month', common_1.ParseIntPipe)), __param(1, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getOneMonthByConcept", null);
__decorate([
    common_1.Get(':id/year'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesYear", null);
__decorate([
    common_1.Get(':date/day'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesDay", null);
__decorate([
    common_1.Get('/period'),
    __param(0, common_1.Query('from')), __param(1, common_1.Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Date]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesPeriod", null);
__decorate([
    common_1.Get(':id/Onequarter/:year'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesOneQuarter", null);
__decorate([
    common_1.Get('/quarter/:year'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumExpensesQuarter", null);
__decorate([
    common_1.Get('/months/:year'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "getSumAllMonthsOneYear", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expense_entity_1.Expense]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "save", null);
__decorate([
    common_1.Delete(':id/delete'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpensesController.prototype, "delete", null);
ExpensesController = __decorate([
    common_1.Controller('expenses'),
    __metadata("design:paramtypes", [expenses_service_1.ExpensesService])
], ExpensesController);
exports.ExpensesController = ExpensesController;
//# sourceMappingURL=expenses.controller.js.map