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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const clientes_entity_1 = require("../clientes/clientes.entity");
const pass_entity_1 = require("../pass/pass.entity");
let Invoice = class Invoice {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Invoice.prototype, "idInvoice", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Invoice.prototype, "concept", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 5, scale: 2, nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Invoice.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], Invoice.prototype, "taxes", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Date)
], Invoice.prototype, "dateInvoice", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Date)
], Invoice.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Date)
], Invoice.prototype, "expirationDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Invoice.prototype, "periodicity", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Invoice.prototype, "paymentMethod", void 0);
__decorate([
    typeorm_1.ManyToOne(type => clientes_entity_1.Clients, client => client.invoices),
    __metadata("design:type", clientes_entity_1.Clients)
], Invoice.prototype, "client", void 0);
__decorate([
    typeorm_1.OneToOne(type => pass_entity_1.Pass, { cascade: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", pass_entity_1.Pass)
], Invoice.prototype, "pass", void 0);
Invoice = __decorate([
    typeorm_1.Entity('invoices')
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.entity.js.map