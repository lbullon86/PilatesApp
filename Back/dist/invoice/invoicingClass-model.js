"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvoicingClass {
    constructor(value = {}) {
        this.totalBarre1 = value.totalBarre1 || 0;
        this.totalBarre2 = value.totalBarre2 || 0;
        this.mat1 = value.mat1 || 0;
        this.mat2 = value.mat2 || 0;
        this.reformer1 = value.reformer1 || 0;
        this.reformer2 = value.reformer2 || 0;
        this.B8 = value.B8 || 0;
        this.B16 = value.B16 || 0;
        this.month = value.month || 0;
    }
}
exports.InvoicingClass = InvoicingClass;
//# sourceMappingURL=invoicingClass-model.js.map