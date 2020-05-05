"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const balance_service_1 = require("./balance.service");
const balance_controller_1 = require("./balance.controller");
const invoice_module_1 = require("../invoice/invoice.module");
const expenses_module_1 = require("../expenses/expenses.module");
let BalanceModule = class BalanceModule {
};
BalanceModule = __decorate([
    common_1.Module({
        providers: [balance_service_1.BalanceService],
        imports: [invoice_module_1.InvoiceModule, expenses_module_1.ExpensesModule],
        controllers: [balance_controller_1.BalanceController]
    })
], BalanceModule);
exports.BalanceModule = BalanceModule;
//# sourceMappingURL=balance.module.js.map