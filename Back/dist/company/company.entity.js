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
const class_validator_1 = require("class-validator");
const clientes_entity_1 = require("../clientes/clientes.entity");
const users_entity_1 = require("../users/users.entity");
const expense_entity_1 = require("../expenses/expense.entity");
const payroll_entity_1 = require("../payrolls/payroll.entity");
const prices_entity_1 = require("../prices/prices.entity");
let Company = class Company {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    class_validator_1.MinLength(3),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Company.prototype, "nif", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToMany(type => clientes_entity_1.Clients, client => client.idClient),
    __metadata("design:type", clientes_entity_1.Clients)
], Company.prototype, "clients", void 0);
__decorate([
    typeorm_1.OneToMany(type => users_entity_1.Users, user => user.idUser),
    __metadata("design:type", users_entity_1.Users)
], Company.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => expense_entity_1.Expense, expense => expense.idExpense),
    __metadata("design:type", expense_entity_1.Expense)
], Company.prototype, "expense", void 0);
__decorate([
    typeorm_1.OneToMany(type => payroll_entity_1.Payrroll, payroll => payroll.idPayrroll),
    __metadata("design:type", payroll_entity_1.Payrroll)
], Company.prototype, "payroll", void 0);
__decorate([
    typeorm_1.OneToMany(type => prices_entity_1.Prices, prices => prices.idPrice),
    __metadata("design:type", prices_entity_1.Prices)
], Company.prototype, "price", void 0);
Company = __decorate([
    typeorm_1.Entity('company')
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map