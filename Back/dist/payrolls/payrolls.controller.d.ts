import { PayrollsService } from './payrolls.service';
import { Payrroll } from './payroll.entity';
export declare class PayrollsController {
    private readonly payrrollService;
    constructor(payrrollService: PayrollsService);
    getAll(): Promise<Payrroll[]>;
    save(payrroll: Payrroll): Promise<Payrroll>;
}
