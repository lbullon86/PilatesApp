import { Pass } from './pass.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Invoice } from 'src/invoice/invoice.entity';
export declare class PassService {
    private readonly repositoryPass;
    private readonly repositoryInvoices;
    constructor(repositoryPass: Repository<Pass>, repositoryInvoices: Repository<Invoice>);
    getAll(): Promise<Pass[]>;
    save(pass: Pass): Promise<Pass>;
    saveAttendance(pass: Pass): Promise<UpdateResult>;
    getOnePassActiveOneClient(idClient: number): Promise<Pass>;
}
