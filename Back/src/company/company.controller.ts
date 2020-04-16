import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){

    }
    
    @Get()
    getAll(): Promise<any[]>{
        return this.companyService.getAll();
    }

    @Post()
    save(@Body() company: Company)
    {
        return this.companyService.save(company)
    }
}
