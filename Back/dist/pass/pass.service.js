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
const typeorm_1 = require("@nestjs/typeorm");
const pass_entity_1 = require("./pass.entity");
const typeorm_2 = require("typeorm");
const invoice_entity_1 = require("../invoice/invoice.entity");
const invoice_service_1 = require("../invoice/invoice.service");
const clientes_entity_1 = require("../clientes/clientes.entity");
let PassService = class PassService {
    constructor(repositoryPass, repositoryInvoices) {
        this.repositoryPass = repositoryPass;
        this.repositoryInvoices = repositoryInvoices;
    }
    getAll() {
        return this.repositoryPass.find();
    }
    save(pass) {
        return this.repositoryPass.save(pass);
    }
    saveAttendance(pass) {
        return this.repositoryPass.update(pass.idPass, pass);
    }
    getOnePassActiveOneClient(idClient) {
        const qb = this.repositoryInvoices;
        console.log(idClient);
        return this.repositoryPass
            .createQueryBuilder('pass')
            .select('pass')
            .where('numberClasses > 0 AND idPass IN' +
            qb
                .createQueryBuilder('invoice')
                .subQuery()
                .select("invoice.passIdPass").from(invoice_entity_1.Invoice, "invoice").where("invoice.clientIdClient = :id").getQuery()).setParameter("id", idClient).getOne();
    }
};
PassService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pass_entity_1.Pass)),
    __param(1, typeorm_1.InjectRepository(pass_entity_1.Pass)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PassService);
exports.PassService = PassService;
//# sourceMappingURL=pass.service.js.map