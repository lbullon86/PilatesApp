import { Repository } from 'typeorm';
import { Payrroll } from './payroll.entity';
export declare class PayrollsService {
    private readonly repositoryPayrroll;
    constructor(repositoryPayrroll: Repository<Payrroll>);
    getAll(): Promise<Payrroll[]>;
    save(payrroll: Payrroll): Promise<Payrroll>;
}
