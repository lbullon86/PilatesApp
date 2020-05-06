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
const balance_service_1 = require("./balance.service");
let BalanceController = class BalanceController {
    constructor(balanceService) {
        this.balanceService = balanceService;
    }
    getBalance() {
        return this.balanceService.getBalanceGlobal();
    }
    getBalanceMonthsOneYear(year) {
        return this.balanceService.getBalanceMonthsOneYear(year);
    }
    getBalanceYear(year) {
        return this.balanceService.getBalanceYear(year);
    }
    getBalanceOneMonth(year, month) {
        return this.balanceService.getBalanceOneMonth(year, month);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "getBalance", null);
__decorate([
    common_1.Get('months/:year/'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "getBalanceMonthsOneYear", null);
__decorate([
    common_1.Get(':year'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "getBalanceYear", null);
__decorate([
    common_1.Get(':year/:month'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)), __param(1, common_1.Param('month', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BalanceController.prototype, "getBalanceOneMonth", null);
BalanceController = __decorate([
    common_1.Controller('api/balance'),
    __metadata("design:paramtypes", [balance_service_1.BalanceService])
], BalanceController);
exports.BalanceController = BalanceController;
//# sourceMappingURL=balance.controller.js.map