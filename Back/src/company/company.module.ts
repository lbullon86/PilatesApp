import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company.entity';

@Module({
    
  controllers: [CompanyController],
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyService],

})
export class CompanyModule {}
