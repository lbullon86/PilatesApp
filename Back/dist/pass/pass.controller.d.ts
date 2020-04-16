import { PassService } from './pass.service';
import { Pass } from './pass.entity';
export declare class PassController {
    private readonly passService;
    constructor(passService: PassService);
    getAll(): Promise<Pass[]>;
    save(pass: Pass): Promise<Pass>;
    saveAttendance(id: number, pass: Pass): Promise<any>;
}
