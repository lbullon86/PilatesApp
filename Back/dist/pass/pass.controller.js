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
const pass_service_1 = require("./pass.service");
const pass_entity_1 = require("./pass.entity");
let PassController = class PassController {
    constructor(passService) {
        this.passService = passService;
    }
    getAll() {
        return this.passService.getAll();
    }
    save(pass) {
        return this.passService.save(pass);
    }
    saveAttendance(id, pass) {
        return this.passService.saveAttendance(pass);
    }
    getOnePassActiveOneClient(id) {
        return this.passService.getOnePassActiveOneClient(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PassController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pass_entity_1.Pass]),
    __metadata("design:returntype", void 0)
], PassController.prototype, "save", null);
__decorate([
    common_1.Put(':id/update'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pass_entity_1.Pass]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "saveAttendance", null);
__decorate([
    common_1.Get(':id/passActive'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "getOnePassActiveOneClient", null);
PassController = __decorate([
    common_1.Controller('api/pass'),
    __metadata("design:paramtypes", [pass_service_1.PassService])
], PassController);
exports.PassController = PassController;
//# sourceMappingURL=pass.controller.js.map