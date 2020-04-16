import { Module } from '@nestjs/common';
import { PayrollsService } from './payrolls.service';
import { PayrollsController } from './payrolls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payrroll } from './payroll.entity';

@Module({

  controllers: [PayrollsController],
  imports:[TypeOrmModule.forFeature([Payrroll])],
  providers: [PayrollsService]
  
})
export class PayrollsModule {}
