import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Post()
  save(@Body() invoice: Invoice) {
    return this.invoiceService.save(invoice);
  }
  @Get('/facturacion')
  getFacturacion(){    
      return this.invoiceService.getFacturacion()
  }

  @Get('/passes')
  getPasses(){
    return this.invoiceService.getPasses();
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
