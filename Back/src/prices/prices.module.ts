import { Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prices } from './prices.entity';

@Module({
  controllers: [PricesController],
  imports:[TypeOrmModule.forFeature([Prices])],
  providers: [PricesService],

})
export class PricesModule {}
