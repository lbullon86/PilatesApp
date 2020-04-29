import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
import { query } from 'express';
import { from } from 'rxjs';
import { Invoicing } from './invoicing-model';
import { get } from 'http';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Post()
  save(@Body() invoice: Invoice) {
    return this.invoiceService.save(invoice);
  }
  @Get('/invoicing')
  getFacturacion(){    
      return this.invoiceService.getInvoicing()
  }

  @Get('/invoicingDay/:date')
  getInvoicingOneDay(@Param ('date') date:Date){
    return this.invoiceService.getInvoicingOneDay(date);
  }
  @Get('/invoicingPeriod')
  getInvoicingOnePeriod(@Query ('from') from:Date,@Query ('to') to:Date ){
  const result = this.invoiceService.getInvoicingOnePeriod(from,to);
  return result;
  }

  @Get('/passes')
  getPasses(){
    return this.invoiceService.getPasses();
  }

  @Get('/invoicingQuarter') 
  getInvoicingQuarte():Promise<Invoicing[]>{
  return this.invoiceService.getInvoicingQuarter();
  }
  @Get('/balance')
  getBalance(){
    return this.invoiceService.getBalance();
  }
  @Get('/invoicingClass/:year')
  getInvoicingClass(@Param('year' , ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingOneYearByClass(year);
  }

  @Get()
  getAll() {
    return this.invoiceService.getAll();
  }

  @Get(':id')
  getInvoiceOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.getInvoiceOneClient(id);
  }

 
}
