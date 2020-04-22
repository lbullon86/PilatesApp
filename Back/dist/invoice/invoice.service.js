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
const invoice_entity_1 = require("./invoice.entity");
const typeorm_2 = require("typeorm");
const invoicing_model_1 = require("./invoicing-model");
let InvoiceService = class InvoiceService {
    constructor(repositoryInvoice) {
        this.repositoryInvoice = repositoryInvoice;
    }
    getAll() {
        return this.repositoryInvoice.find();
    }
    save(invoice) {
        return this.repositoryInvoice.save(invoice);
    }
    getInvoiceOneClient(id) {
        return this.repositoryInvoice.findOne(id);
    }
    async getInvoicing() {
        let invoicing = new invoicing_model_1.Invoicing();
        const queryResultSum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .getRawOne();
        const queryResultSumCash = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumCash')
            .where('invoice.paymentMethod =:method', { method: 1 })
            .getRawOne();
        invoicing.sum = queryResultSum.sum;
        invoicing.sumCash = queryResultSumCash.sumCash;
        invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
        invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
        invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);
        return invoicing;
    }
    async getInvoicingOneDay(date) {
        let dateInvoice = new Date(date);
        let invoicing = new invoicing_model_1.Invoicing();
        const sum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('invoice.dateInvoice =:dateInvoice', { dateInvoice: dateInvoice })
            .getRawOne();
        invoicing.sum = sum.sum;
        const sumCash = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumCash')
            .where('invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 1 })
            .getRawOne();
        invoicing.sumCash = sumCash.sumCash;
        const sumBizum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumBizum')
            .where('invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 2 })
            .getRawOne();
        invoicing.sumBizum = sumBizum.sumBizum;
        const sumTransfer = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumTransfer')
            .where('invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 4 })
            .getRawOne();
        invoicing.sumTransfer = sumTransfer.sumTransfer;
        const sumTpv = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumTpv')
            .where('invoice.dateInvoice =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 3 })
            .getRawOne();
        invoicing.sumTpv = sumTpv.sumTpv;
        invoicing.sumTax = await Math.round(invoicing.sum - ((invoicing.sum / 1.21) * 0.8));
        return invoicing;
    }
    getPasses() {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('invoice')
            .from(invoice_entity_1.Invoice, 'invoice')
            .where('invoice.concept = B8 ')
            .getRawMany();
    }
    async getInvoicingOnePeriod(dateInvoice1, dateInvoice2) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('invoice.dateInvoice >:date1 AND invoice.dateInvoice <:date2', {
            date1: dateInvoice1,
            date2: dateInvoice2,
        })
            .getRawOne();
    }
    async getInvoicingQuarter() {
        const invoicingQuarter = [];
        const quarterDate = [
            ['2019-12-31T22:00:00.000Z', '2020-04-01T00:00:00.000Z'],
            ['2020-03-31T23:59:59.000Z', '2020-07-01T00:00:00.000Z'],
            ['2020-06-30T22:00:00.000Z', '2020-10-01T00:00:00.000Z'],
            ['2020-09-30T22:00:00.000Z', '2021-01-01T00:00:00.000Z'],
        ];
        const promises = quarterDate.map(async (element) => {
            const invoicing = new invoicing_model_1.Invoicing();
            const queryResult = await this.repositoryInvoice
                .createQueryBuilder('invoice')
                .select('SUM(invoice.quantity)', 'sum')
                .where('invoice.dateInvoice BETWEEN :date1 AND :date2', {
                date1: element[0],
                date2: element[1],
            })
                .getRawOne();
            invoicing.sum = queryResult.sum;
            console.log(element);
            console.log(invoicing.sum);
            invoicingQuarter.push(invoicing);
        });
        await Promise.all(promises);
        return invoicingQuarter;
    }
};
InvoiceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map