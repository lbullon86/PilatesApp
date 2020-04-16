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
const prices_service_1 = require("./prices.service");
const prices_entity_1 = require("./prices.entity");
let PricesController = class PricesController {
    constructor(priceService) {
        this.priceService = priceService;
    }
    getOne() {
        return this.priceService.getAll();
    }
    save(price) {
        return this.priceService.save(price);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PricesController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prices_entity_1.Prices]),
    __metadata("design:returntype", void 0)
], PricesController.prototype, "save", null);
PricesController = __decorate([
    common_1.Controller('prices'),
    __metadata("design:paramtypes", [prices_service_1.PricesService])
], PricesController);
exports.PricesController = PricesController;
//# sourceMappingURL=prices.controller.js.map