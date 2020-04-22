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
const typeorm_2 = require("typeorm");
const clientes_entity_1 = require("./clientes.entity");
const invoice_entity_1 = require("../invoice/invoice.entity");
const invoice_service_1 = require("../invoice/invoice.service");
const pass_entity_1 = require("../pass/pass.entity");
const pass_service_1 = require("../pass/pass.service");
let ClientesService = class ClientesService {
    constructor(repositoryClients, invoiceService, passService) {
        this.repositoryClients = repositoryClients;
        this.invoiceService = invoiceService;
        this.passService = passService;
    }
    getAll() {
        return this.repositoryClients.find();
    }
    save(client) {
        return this.repositoryClients.save(client);
    }
    getOne(id) {
        return this.repositoryClients.findOne(id);
    }
    async getInvoices(id) {
        const client = await this.repositoryClients.findOne(id, { relations: ["invoices"] });
        return client.invoices;
    }
    updateClient(client) {
        return this.repositoryClients.update(client.idClient, client);
    }
    async saveInvoice(id, invoice) {
        invoice.pass = this.getTypePass(invoice);
        const client = await this.repositoryClients.findOne(id, { relations: ["invoices"] });
        client.invoices.push(invoice);
        await this.repositoryClients.save(client);
        return invoice;
    }
    getTypePass(invoice) {
        if (invoice.concept = "B8") {
            const pass = new pass_entity_1.Pass();
            pass.numberClasses = 8;
            pass.dates = [];
            return pass;
        }
        else if (invoice.concept = "B16") {
            const pass = new pass_entity_1.Pass();
            pass.numberClasses = 16;
            pass.dates = [];
            return pass;
        }
    }
    getPasses(client) {
        return this.repositoryClients.createQueryBuilder("client").select("pass")
            .from(invoice_entity_1.Invoice, "invoice").where("(invoice.concept = B8  AND invoice.client.idClient = client.idClient").getRawOne();
    }
};
ClientesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(clientes_entity_1.Clients)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        invoice_service_1.InvoiceService,
        pass_service_1.PassService])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map