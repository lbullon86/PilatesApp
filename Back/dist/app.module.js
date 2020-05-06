"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_module_1 = require("./core/core.module");
const company_module_1 = require("./company/company.module");
const users_module_1 = require("./users/users.module");
const clientes_module_1 = require("./clientes/clientes.module");
const expenses_module_1 = require("./expenses/expenses.module");
const payrolls_module_1 = require("./payrolls/payrolls.module");
const invoice_module_1 = require("./invoice/invoice.module");
const pass_module_1 = require("./pass/pass.module");
const prices_module_1 = require("./prices/prices.module");
const balance_module_1 = require("./balance/balance.module");
const schedule_module_1 = require("./schedule/schedule.module");
const frontend_middleware_1 = require("./core/middleware/frontend.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(frontend_middleware_1.FrontendMiddleware)
            .forRoutes({
            path: '/**',
            method: common_1.RequestMethod.ALL
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [core_module_1.CoreModule, company_module_1.CompanyModule, users_module_1.UsersModule, clientes_module_1.ClientesModule, expenses_module_1.ExpensesModule, payrolls_module_1.PayrollsModule, invoice_module_1.InvoiceModule, pass_module_1.PassModule, prices_module_1.PricesModule, balance_module_1.BalanceModule, schedule_module_1.ScheduleModule],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map