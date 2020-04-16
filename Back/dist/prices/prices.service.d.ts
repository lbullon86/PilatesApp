import { Prices } from './prices.entity';
import { Repository } from 'typeorm/repository/Repository';
export declare class PricesService {
    private readonly repositoryPrices;
    constructor(repositoryPrices: Repository<Prices>);
    getAll(): Promise<Prices[]>;
    save(price: Prices): Promise<Prices>;
}
