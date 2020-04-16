import { Invoice } from "src/invoice/invoice.entity";
import { Company } from "src/company/company.entity";
export declare class Clients {
    idClient: number;
    nameClient: string;
    surnameClient: string;
    dniClient: string;
    addressClient: string;
    phoneClient: string;
    emailClient: string;
    birthDateClient: Date;
    activeClient: boolean;
    invoices: Invoice[];
    company: Company;
}
