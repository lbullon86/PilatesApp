import { CompanyService } from './company.service';
import { Company } from './company.entity';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    getAll(): Promise<any[]>;
    save(company: Company): Promise<Company>;
}
