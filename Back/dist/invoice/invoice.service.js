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
const invoicingClass_model_1 = require("./invoicingClass-model");
const util_1 = require("util");
let InvoiceService = class InvoiceService {
    constructor(repositoryInvoice) {
        this.repositoryInvoice = repositoryInvoice;
    }
    getAll() {
        return this.repositoryInvoice.find();
    }
    save(invoice) {
        console.log(invoice);
        return this.repositoryInvoice.save(invoice);
    }
    getInvoiceOneClient(id) {
        return this.repositoryInvoice.findOne(id);
    }
    async getInvoicesOneClient(id) {
        var invoice;
        invoice = await this.repositoryInvoice.createQueryBuilder("invoices")
            .select().where("invoices.clientIdClient =:idClient", { idClient: id })
            .orderBy("invoices.dateInvoice", "DESC").limit(5).getRawMany();
        return invoice;
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
    async getInvoicingYear(year) {
        let invoicing = new invoicing_model_1.Invoicing();
        const queryResultSum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:yearSelected', { yearSelected: year })
            .getRawOne();
        invoicing.sum = queryResultSum.sum;
        invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
        invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
        invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);
        return invoicing;
    }
    async getInvoicingOneMonth(year, month) {
        let invoicing = new invoicing_model_1.Invoicing();
        const queryResultSum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:yearSelected and month(invoice.dateInvoice) =:monthSelected', { yearSelected: year,
            monthSelected: month
        })
            .getRawOne();
        invoicing.sum = queryResultSum.sum;
        invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
        invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
        invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);
        return invoicing;
    }
    async getInvoicingOneYearAllMonths(year) {
        const invoicingMonths = [];
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const promises = months.map(async (month) => {
            const invoice = await this.getInvoicingOneMonth(year, month);
            invoice.month = month;
            invoicingMonths.push(invoice);
        });
        await Promise.all(promises);
        return this.sortingInvoicingClass(invoicingMonths);
    }
    getDefaulters() {
        const today = new Date();
        const invoices = this.repositoryInvoice.createQueryBuilder("invoice").select("invoice.clientIdClient").where("date(invoice.startDate) <=:date AND date(invoice.expirationDate) >=:date", { date: today });
        return invoices;
    }
    async getInvoicingOneDay(date) {
        let dateInvoice = new Date(date);
        let invoicing = new invoicing_model_1.Invoicing();
        const sum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('date(invoice.dateInvoice) =:dateInvoice', { dateInvoice: dateInvoice })
            .getRawOne();
        invoicing.sum = sum.sum;
        const sumCash = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumCash')
            .where('date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 1 })
            .getRawOne();
        invoicing.sumCash = sumCash.sumCash;
        const sumBizum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumBizum')
            .where('date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 2 })
            .getRawOne();
        invoicing.sumBizum = sumBizum.sumBizum;
        const sumTransfer = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumTransfer')
            .where('date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 4 })
            .getRawOne();
        invoicing.sumTransfer = sumTransfer.sumTransfer;
        const sumTpv = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sumTpv')
            .where('date(invoice.dateInvoice) =:dateInvoice and invoice.paymentMethod =:method', { dateInvoice: dateInvoice, method: 3 })
            .getRawOne();
        invoicing.sumTpv = sumTpv.sumTpv;
        invoicing.sumTax = await Math.round(invoicing.sum - (invoicing.sum / 1.21) * 0.8);
        invoicing = this.getIsNull(invoicing);
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
        let invoicing = new invoicing_model_1.Invoicing();
        const queryReesultSum = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('date(invoice.dateInvoice) >:date1 AND date(invoice.dateInvoice) <:date2', {
            date1: dateInvoice1,
            date2: dateInvoice2,
        })
            .getRawOne();
        const queryReesultSumCash = await this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('date(invoice.dateInvoice) >:date1 AND date(invoice.dateInvoice) <:date2 AND invoice.paymentMethod =:method', {
            date1: dateInvoice1,
            date2: dateInvoice2,
            method: 1
        })
            .getRawOne();
        invoicing.sum = queryReesultSum.sum;
        invoicing.sumIva = (await invoicing.sum) - invoicing.sum / 1.21;
        invoicing.sumIrpf = (await (invoicing.sum / 1.21)) * 0.2;
        invoicing.sumTax = await Math.round(invoicing.sumIva + invoicing.sumIrpf);
        invoicing.sumCash = queryReesultSumCash.sum;
        return invoicing;
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
                .where('date(invoice.dateInvoice) BETWEEN :date1 AND :date2', {
                date1: element[0],
                date2: element[1],
            })
                .getRawOne();
            invoicing.sum = queryResult.sum;
            invoicingQuarter.push(invoicing);
        });
        await Promise.all(promises);
        return invoicingQuarter;
    }
    getInvoicingMonthByOneClass(year, month, typeClass) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND month(invoice.dateInvoice)=:month AND invoice.concept =:concept', {
            date1: year,
            month: month,
            concept: typeClass,
        }).getRawOne();
    }
    async getInvoicingMonthByAllClass(year, month) {
        var invoicing = new invoicingClass_model_1.InvoicingClass();
        const queryResultB8 = await this.getInvoicingMonthByOneClass(year, month, "B8");
        const queryResultB16 = await this.getInvoicingMonthByOneClass(year, month, "B16");
        const queryResultMT1 = await this.getInvoicingMonthByOneClass(year, month, "MT1");
        const queryResultMT2 = await this.getInvoicingMonthByOneClass(year, month, "MT2");
        const queryResultR1 = await this.getInvoicingMonthByOneClass(year, month, "R1");
        const queryResultR2 = await this.getInvoicingMonthByOneClass(year, month, "R2");
        const queryResultTB1 = await this.getInvoicingMonthByOneClass(year, month, "TB1");
        const queryResultTB2 = await this.getInvoicingMonthByOneClass(year, month, "TB2");
        invoicing.B16 = queryResultB16.sum;
        invoicing.B8 = queryResultB8.sum;
        invoicing.reformer1 = queryResultR1.sum;
        invoicing.reformer2 = queryResultR2.sum;
        invoicing.mat1 = queryResultMT1.sum;
        invoicing.mat2 = queryResultMT2.sum;
        invoicing.totalBarre1 = queryResultTB1.sum;
        invoicing.totalBarre2 = queryResultTB2.sum;
        invoicing = this.getIsNull(invoicing);
        return invoicing;
    }
    getIsNull(number) {
        for (const key in number) {
            if (util_1.isNull(number[key])) {
                number[key] = 0;
            }
        }
        return number;
    }
    async getInvoicingMonthsByClass(year) {
        const invoicingMonths = [];
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const promises = months.map(async (month) => {
            const invoice = await this.getInvoicingMonthByAllClass(year, month);
            invoice.month = month;
            invoicingMonths.push(invoice);
        });
        await Promise.all(promises);
        return this.sortingInvoicingClass(invoicingMonths);
    }
    sortingInvoicingClass(invoicingMonths) {
        invoicingMonths.sort(compare);
        function compare(a, b) {
            if (a.month > b.month)
                return 1;
            if (b.month > a.month)
                return -1;
            return 0;
        }
        return invoicingMonths;
    }
    getInvoicingMonthByOnePaymentMethod(year, month, method) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND month(invoice.dateInvoice)=:month AND invoice.paymentMethod =:payment', {
            date1: year,
            month: month,
            payment: method,
        }).getRawOne();
    }
    async getInvoicingOneMonthAllPaymentMethod(year, month) {
        const invoicing = new invoicing_model_1.Invoicing();
        const queryResultsumCash = await this.getInvoicingMonthByOnePaymentMethod(year, month, 1);
        const queryResultsumBizum = await this.getInvoicingMonthByOnePaymentMethod(year, month, 2);
        const queryResultsumTPV = await this.getInvoicingMonthByOnePaymentMethod(year, month, 3);
        const queryResultsumTransfer = await this.getInvoicingMonthByOnePaymentMethod(year, month, 4);
        if (util_1.isNull(queryResultsumCash.sum)) {
            invoicing.sumCash = 0;
        }
        else {
            invoicing.sumCash = queryResultsumCash.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTPV.sum)) {
            invoicing.sumTpv = 0;
        }
        else {
            invoicing.sumTpv = queryResultsumTPV.sum;
        }
        ;
        if (util_1.isNull(queryResultsumBizum.sum)) {
            invoicing.sumBizum = 0;
        }
        else {
            invoicing.sumBizum = queryResultsumBizum.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTransfer.sum)) {
            invoicing.sumTransfer = 0;
        }
        else {
            invoicing.sumTransfer = queryResultsumTransfer.sum;
        }
        ;
        return invoicing;
    }
    async getInvoicingMonthsByPaymentMethod(year) {
        const invoicingMonths = [];
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const promises = months.map(async (month) => {
            const invoice = await this.getInvoicingOneMonthAllPaymentMethod(year, month);
            invoice.month = month;
            invoicingMonths.push(invoice);
        });
        await Promise.all(promises);
        return this.sortingInvoicingClass(invoicingMonths);
    }
    getInvoicingOneQuarterByOneClass(year, month1, month2, concept) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND month(invoice.dateInvoice) between :month1 AND :month2  AND invoice.concept =:concept', {
            month1: month1,
            month2: month2,
            date1: year,
            concept: concept,
        }).getRawOne();
    }
    async getInvoicingOneQuarterByAllClass(year, month1, month2) {
        var invoicing = new invoicingClass_model_1.InvoicingClass();
        const queryResultB8 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "B8");
        const queryResultB16 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "B16");
        const queryResultMT1 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "MT1");
        const queryResultMT2 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "MT2");
        const queryResultR1 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "R1");
        const queryResultR2 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "R2");
        const queryResultTB1 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "TB1");
        const queryResultTB2 = await this.getInvoicingOneQuarterByOneClass(year, month1, month2, "TB2");
        invoicing.B16 = queryResultB16.sum;
        invoicing.B8 = queryResultB8.sum;
        invoicing.reformer1 = queryResultR1.sum;
        invoicing.reformer2 = queryResultR2.sum;
        invoicing.mat1 = queryResultMT1.sum;
        invoicing.mat2 = queryResultMT2.sum;
        invoicing.totalBarre1 = queryResultTB1.sum;
        invoicing.totalBarre2 = queryResultTB2.sum;
        invoicing = this.getIsNull(invoicing);
        return invoicing;
    }
    async getInvoicingOneYearByClassQuarter(year) {
        const invoicingQuarter = [];
        const quarterDate = [[1, 3], [4, 6], [7, 9], [10, 12]];
        const promises = quarterDate.map(async (date) => {
            invoicingQuarter.push(await this.getInvoicingOneQuarterByAllClass(year, date[0], date[1]));
        });
        await Promise.all(promises);
        return invoicingQuarter;
    }
    getInvoicingOneQuarterByOnePaymentMethod(year, month1, month2, method) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND month(invoice.dateInvoice) between :month1 AND :month2  AND invoice.paymentMethod =:payment', {
            month1: month1,
            month2: month2,
            date1: year,
            payment: method,
        }).getRawOne();
    }
    async getInvoicingOneQuarterByAllPaymentMethod(year, month1, month2) {
        const invoicing = new invoicing_model_1.Invoicing();
        const queryResultsumCash = await this.getInvoicingOneQuarterByOnePaymentMethod(year, month1, month2, 1);
        const queryResultsumBizum = await this.getInvoicingOneQuarterByOnePaymentMethod(year, month1, month2, 2);
        const queryResultsumTPV = await this.getInvoicingOneQuarterByOnePaymentMethod(year, month1, month2, 3);
        const queryResultsumTransfer = await this.getInvoicingOneQuarterByOnePaymentMethod(year, month1, month2, 4);
        if (util_1.isNull(queryResultsumCash.sum)) {
            invoicing.sumCash = 0;
        }
        else {
            invoicing.sumCash = queryResultsumCash.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTPV.sum)) {
            invoicing.sumTpv = 0;
        }
        else {
            invoicing.sumTpv = queryResultsumTPV.sum;
        }
        ;
        if (util_1.isNull(queryResultsumBizum.sum)) {
            invoicing.sumBizum = 0;
        }
        else {
            invoicing.sumBizum = queryResultsumBizum.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTransfer.sum)) {
            invoicing.sumTransfer = 0;
        }
        else {
            invoicing.sumTransfer = queryResultsumTransfer.sum;
        }
        ;
        return invoicing;
    }
    async getInvoicingOneYearByPaymentMethodQuarter(year) {
        const invoicingQuarter = [];
        const quarterDate = [[1, 3], [4, 6], [7, 9], [10, 12]];
        const promises = quarterDate.map(async (date) => {
            invoicingQuarter.push(await this.getInvoicingOneQuarterByAllPaymentMethod(year, date[0], date[1]));
        });
        await Promise.all(promises);
        return invoicingQuarter;
    }
    getInvoicingOneYearByOneClass(year, concept) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND invoice.concept =:concept', {
            date1: year,
            concept: concept,
        }).getRawOne();
    }
    async getInvoicingOneYearByClass(year) {
        var invoicing = new invoicingClass_model_1.InvoicingClass();
        const queryResultB8 = await this.getInvoicingOneYearByOneClass(year, "B8");
        const queryResultB16 = await this.getInvoicingOneYearByOneClass(year, "B16");
        const queryResultMT1 = await this.getInvoicingOneYearByOneClass(year, "MT1");
        const queryResultMT2 = await this.getInvoicingOneYearByOneClass(year, "MT2");
        const queryResultR1 = await this.getInvoicingOneYearByOneClass(year, "R1");
        const queryResultR2 = await this.getInvoicingOneYearByOneClass(year, "R2");
        const queryResultTB1 = await this.getInvoicingOneYearByOneClass(year, "TB1");
        const queryResultTB2 = await this.getInvoicingOneYearByOneClass(year, "TB2");
        invoicing.B16 = queryResultB16.sum;
        invoicing.B8 = queryResultB8.sum;
        invoicing.reformer1 = queryResultR1.sum;
        invoicing.reformer2 = queryResultR2.sum;
        invoicing.mat1 = queryResultMT1.sum;
        invoicing.mat2 = queryResultMT2.sum;
        invoicing.totalBarre1 = queryResultTB1.sum;
        invoicing.totalBarre2 = queryResultTB2.sum;
        invoicing = this.getIsNull(invoicing);
        return invoicing;
    }
    getInvoicingOneYearByOneMethodPayment(year, method) {
        return this.repositoryInvoice
            .createQueryBuilder('invoice')
            .select('SUM(invoice.quantity)', 'sum')
            .where('year(invoice.dateInvoice)=:date1 AND invoice.paymentMethod =:payment', {
            date1: year,
            payment: method,
        }).getRawOne();
    }
    async getInvoicingOneYearByMethodPayment(year) {
        var invoicing = new invoicing_model_1.Invoicing();
        const queryResultsumCash = await this.getInvoicingOneYearByOneMethodPayment(year, 1);
        const queryResultsumBizum = await this.getInvoicingOneYearByOneMethodPayment(year, 2);
        const queryResultsumTPV = await this.getInvoicingOneYearByOneMethodPayment(year, 3);
        const queryResultsumTransfer = await this.getInvoicingOneYearByOneMethodPayment(year, 4);
        if (util_1.isNull(queryResultsumCash.sum)) {
            invoicing.sumCash = 0;
        }
        else {
            invoicing.sumCash = queryResultsumCash.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTPV.sum)) {
            invoicing.sumTpv = 0;
        }
        else {
            invoicing.sumTpv = queryResultsumTPV.sum;
        }
        ;
        if (util_1.isNull(queryResultsumBizum.sum)) {
            invoicing.sumBizum = 0;
        }
        else {
            invoicing.sumBizum = queryResultsumBizum.sum;
        }
        ;
        if (util_1.isNull(queryResultsumTransfer.sum)) {
            invoicing.sumTransfer = 0;
        }
        else {
            invoicing.sumTransfer = queryResultsumTransfer.sum;
        }
        ;
        return invoicing;
    }
};
InvoiceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map