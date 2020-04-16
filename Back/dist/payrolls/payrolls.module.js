"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const payrolls_service_1 = require("./payrolls.service");
const payrolls_controller_1 = require("./payrolls.controller");
const typeorm_1 = require("@nestjs/typeorm");
const payroll_entity_1 = require("./payroll.entity");
let PayrollsModule = class PayrollsModule {
};
PayrollsModule = __decorate([
    common_1.Module({
        controllers: [payrolls_controller_1.PayrollsController],
        imports: [typeorm_1.TypeOrmModule.forFeature([payroll_entity_1.Payrroll])],
        providers: [payrolls_service_1.PayrollsService]
    })
], PayrollsModule);
exports.PayrollsModule = PayrollsModule;
//# sourceMappingURL=payrolls.module.js.map