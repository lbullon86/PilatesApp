import { PricesService } from './prices.service';
import { Prices } from './prices.entity';
export declare class PricesController {
    private readonly priceService;
    constructor(priceService: PricesService);
    getOne(): Promise<Prices[]>;
    save(price: Prices): Promise<Prices>;
}
