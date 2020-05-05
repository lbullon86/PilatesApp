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
const invoice_service_1 = require("./invoice.service");
const invoice_entity_1 = require("./invoice.entity");
let InvoiceController = class InvoiceController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    save(invoice) {
        return this.invoiceService.save(invoice);
    }
    getFacturacion() {
        return this.invoiceService.getInvoicing();
    }
    getInvoicingOneDay(date) {
        return this.invoiceService.getInvoicingOneDay(date);
    }
    getInvoicingOnePeriod(from, to) {
        const result = this.invoiceService.getInvoicingOnePeriod(from, to);
        return result;
    }
    getPasses() {
        return this.invoiceService.getPasses();
    }
    getInvoicingQuarte() {
        return this.invoiceService.getInvoicingQuarter();
    }
    getInvoicingClass(year) {
        return this.invoiceService.getInvoicingOneYearByClass(year);
    }
    getAll() {
        return this.invoiceService.getAll();
    }
    getInvoicesOneClient(id) {
        return this.invoiceService.getInvoicesOneClient(id);
    }
    getInvoiceOneClient(id) {
        return this.invoiceService.getInvoiceOneClient(id);
    }
    getInvoicingOneYearByClassQuarter(year) {
        return this.invoiceService.getInvoicingOneYearByClassQuarter(year);
    }
    getInvoicingOneQuarterAllClass(year, from, to) {
        return this.invoiceService.getInvoicingOneQuarterByAllClass(year, from, to);
    }
    getInvoicingOneQuarterAllMethodPayment(year, from, to) {
        return this.invoiceService.getInvoicingOneQuarterByAllPaymentMethod(year, from, to);
    }
    getInvoicingMonthsrByClassQuarter(year, month) {
        return this.invoiceService.getInvoicingMonthByAllClass(year, month);
    }
    getInvoicingMonthsByClass(year) {
        return this.invoiceService.getInvoicingMonthsByClass(year);
    }
    ;
    getInvoicingOneMonthByOnePaymentMethod(year, month, method) {
        return this.invoiceService.getInvoicingMonthByOnePaymentMethod(year, month, method);
    }
    getInvoicingOneMonthByPaymentMethod(year, month) {
        return this.invoiceService.getInvoicingOneMonthAllPaymentMethod(year, month);
    }
    getInvoicingMonthsByPaymentMethod(year) {
        return this.invoiceService.getInvoicingMonthsByPaymentMethod(year);
    }
    getInvoicingYearByPaymentMethod(year) {
        return this.invoiceService.getInvoicingOneYearByMethodPayment(year);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [invoice_entity_1.Invoice]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "save", null);
__decorate([
    common_1.Get('/invoicing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getFacturacion", null);
__decorate([
    common_1.Get('/invoicingDay/:date'),
    __param(0, common_1.Param('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOneDay", null);
__decorate([
    common_1.Get('/invoicingPeriod'),
    __param(0, common_1.Query('from')), __param(1, common_1.Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Date]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOnePeriod", null);
__decorate([
    common_1.Get('/passes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getPasses", null);
__decorate([
    common_1.Get('/invoicingQuarter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getInvoicingQuarte", null);
__decorate([
    common_1.Get('/invoicingClass/:year'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingClass", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id/invoices'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicesOneClient", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoiceOneClient", null);
__decorate([
    common_1.Get("quarterClass/:year"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOneYearByClassQuarter", null);
__decorate([
    common_1.Get("oneQuarterAllClass/:year"),
    __param(0, common_1.Param("year", common_1.ParseIntPipe)), __param(1, common_1.Query('from')), __param(2, common_1.Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOneQuarterAllClass", null);
__decorate([
    common_1.Get("oneQuarterAllMethodPayment/:year"),
    __param(0, common_1.Param("year", common_1.ParseIntPipe)), __param(1, common_1.Query('from')), __param(2, common_1.Query('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOneQuarterAllMethodPayment", null);
__decorate([
    common_1.Get("monthsClass/:year/:month"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)), __param(1, common_1.Param('month', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingMonthsrByClassQuarter", null);
__decorate([
    common_1.Get("allMonths/:year"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingMonthsByClass", null);
__decorate([
    common_1.Get("oneMonthOneMethod/:year/:month/:method"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __param(1, common_1.Param("month", common_1.ParseIntPipe)), __param(2, common_1.Param("method", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], InvoiceController.prototype, "getInvoicingOneMonthByOnePaymentMethod", null);
__decorate([
    common_1.Get("oneMonthAllMethods/:year/:month"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __param(1, common_1.Param("month", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingOneMonthByPaymentMethod", null);
__decorate([
    common_1.Get("monthsMethod/:year"),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingMonthsByPaymentMethod", null);
__decorate([
    common_1.Get('invoicingYearByMethodPayment/:year'),
    __param(0, common_1.Param('year', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvoiceController.prototype, "getInvoicingYearByPaymentMethod", null);
InvoiceController = __decorate([
    common_1.Controller('invoices'),
    __metadata("design:paramtypes", [invoice_service_1.InvoiceService])
], InvoiceController);
exports.InvoiceController = InvoiceController;
//# sourceMappingURL=invoice.controller.js.map