"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const prices_controller_1 = require("./prices.controller");
const prices_service_1 = require("./prices.service");
const typeorm_1 = require("@nestjs/typeorm");
const prices_entity_1 = require("./prices.entity");
let PricesModule = class PricesModule {
};
PricesModule = __decorate([
    common_1.Module({
        controllers: [prices_controller_1.PricesController],
        imports: [typeorm_1.TypeOrmModule.forFeature([prices_entity_1.Prices])],
        providers: [prices_service_1.PricesService],
    })
], PricesModule);
exports.PricesModule = PricesModule;
//# sourceMappingURL=prices.module.js.map