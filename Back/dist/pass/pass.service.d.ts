import { Pass } from './pass.entity';
import { Repository } from 'typeorm';
export declare class PassService {
    private readonly repositoryPass;
    constructor(repositoryPass: Repository<Pass>);
    getAll(): Promise<Pass[]>;
    save(pass: Pass): Promise<Pass>;
    saveAttendance(pass: Pass): Promise<import("typeorm").UpdateResult>;
}
