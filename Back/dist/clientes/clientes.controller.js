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
const clientes_service_1 = require("./clientes.service");
const clientes_entity_1 = require("./clientes.entity");
const invoice_entity_1 = require("../invoice/invoice.entity");
const pass_entity_1 = require("../pass/pass.entity");
let ClientesController = class ClientesController {
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    getAll() {
        return this.clientesService.getAll();
    }
    save(client) {
        console.log(client);
        return this.clientesService.save(client);
    }
    getOne(id) {
        return this.clientesService.getOne(id);
    }
    getInvoices(id) {
        return this.clientesService.getInvoices(id);
    }
    saveInvoice(id, invoice) {
        return this.clientesService.saveInvoice(id, invoice);
    }
    async update(id, client) {
        return this.clientesService.updateClient(client);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clientes_entity_1.Clients]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "save", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "getOne", null);
__decorate([
    common_1.Get(':id/invoices'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "getInvoices", null);
__decorate([
    common_1.Post(':id/invoices'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, invoice_entity_1.Invoice]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "saveInvoice", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, clientes_entity_1.Clients]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "update", null);
ClientesController = __decorate([
    common_1.Controller('clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map