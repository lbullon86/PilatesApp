"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pass_controller_1 = require("./pass.controller");
const pass_service_1 = require("./pass.service");
const typeorm_1 = require("@nestjs/typeorm");
const pass_entity_1 = require("./pass.entity");
let PassModule = class PassModule {
};
PassModule = __decorate([
    common_1.Module({
        controllers: [pass_controller_1.PassController],
        imports: [typeorm_1.TypeOrmModule.forFeature([pass_entity_1.Pass])],
        providers: [pass_service_1.PassService],
        exports: [pass_service_1.PassService]
    })
], PassModule);
exports.PassModule = PassModule;
//# sourceMappingURL=pass.module.js.map