import { Company } from './company.entity';
import { Repository } from 'typeorm';
export declare class CompanyService {
    private readonly repository;
    constructor(repository: Repository<Company>);
    getAll(): Promise<Company[]>;
    save(company: Company): Promise<Company>;
}
