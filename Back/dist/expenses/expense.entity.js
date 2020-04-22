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
const company_entity_1 = require("../company/company.entity");
let Expense = class Expense {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Expense.prototype, "idExpense", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Expense.prototype, "concept", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Expense.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Expense.prototype, "taxes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Expense.prototype, "date", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.Company, company => company.id),
    __metadata("design:type", company_entity_1.Company)
], Expense.prototype, "company", void 0);
Expense = __decorate([
    typeorm_1.Entity('expenses')
], Expense);
exports.Expense = Expense;
//# sourceMappingURL=expense.entity.js.map