"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const invoice_payment_method_controller_1 = require("./invoice-payment-method.controller");
const invoice_payment_method_service_1 = require("./invoice-payment-method.service");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_entity_1 = require("../invoice/invoice.entity");
let InvoicePaymentMethodModule = class InvoicePaymentMethodModule {
};
InvoicePaymentMethodModule = __decorate([
    common_1.Module({
        controllers: [invoice_payment_method_controller_1.InvoicePaymentMethodController],
        imports: [typeorm_1.TypeOrmModule.forFeature([invoice_entity_1.Invoice])],
        providers: [invoice_payment_method_service_1.InvoicePaymentMethodService]
    })
], InvoicePaymentMethodModule);
exports.InvoicePaymentMethodModule = InvoicePaymentMethodModule;
//# sourceMappingURL=invoice-payment-method.module.js.map