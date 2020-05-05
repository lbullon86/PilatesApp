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

  @Get('/invoicingClass/:year')
  getInvoicingClass(@Param('year' , ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingOneYearByClass(year);
  }

  @Get()
  getAll() {
    return this.invoiceService.getAll();
  }
  @Get(':id/invoices')
  getInvoicesOneClient(@Param('id', ParseIntPipe) id: number){
    return this.invoiceService.getInvoicesOneClient(id);
  }


  @Get(':id')
  getInvoiceOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.getInvoiceOneClient(id);
  }
  @Get("quarterClass/:year")
  getInvoicingOneYearByClassQuarter(@Param('year' , ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingOneYearByClassQuarter(year)
  }
  
  @Get("oneQuarterAllClass/:year")
  getInvoicingOneQuarterAllClass(@Param("year", ParseIntPipe) year:number,@Query ('from') from:number,@Query ('to') to:number){
    return this.invoiceService.getInvoicingOneQuarterByAllClass(year,from,to)

  }
 
  @Get("oneQuarterAllMethodPayment/:year")
  getInvoicingOneQuarterAllMethodPayment(@Param("year", ParseIntPipe) year:number,@Query ('from') from:number,@Query ('to') to:number){
    return this.invoiceService.getInvoicingOneQuarterByAllPaymentMethod(year,from,to)
  }

  @Get("monthsClass/:year/:month")
  getInvoicingMonthsrByClassQuarter(@Param('year' , ParseIntPipe) year:number,@Param('month' , ParseIntPipe) month:number){
    return this.invoiceService.getInvoicingMonthByAllClass(year,month)
  }


  @Get("allMonths/:year")
  getInvoicingMonthsByClass(@Param('year', ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingMonthsByClass(year)
  };



  @Get("oneMonthOneMethod/:year/:month/:method")
  getInvoicingOneMonthByOnePaymentMethod(@Param('year' , ParseIntPipe) year:number, 
  @Param("month", ParseIntPipe) month:number,@Param("method", ParseIntPipe) method:number) :Promise<Invoicing>{
    return this.invoiceService.getInvoicingMonthByOnePaymentMethod(year,month,method)
  }

  @Get("oneMonthAllMethods/:year/:month")
  getInvoicingOneMonthByPaymentMethod(@Param('year' , ParseIntPipe) year:number, 
  @Param("month", ParseIntPipe) month:number){
    return this.invoiceService.getInvoicingOneMonthAllPaymentMethod(year,month)
  }
    
  @Get("monthsMethod/:year")
  getInvoicingMonthsByPaymentMethod(@Param('year' , ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingMonthsByPaymentMethod(year)
  }


  @Get('invoicingYearByMethodPayment/:year')
  getInvoicingYearByPaymentMethod(@Param('year' , ParseIntPipe) year:number){
    return this.invoiceService.getInvoicingOneYearByMethodPayment(year);
  }


}
