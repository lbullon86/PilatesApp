import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clients } from './clientes.entity';
import { Invoice } from 'src/invoice/invoice.entity';
import { Observable } from 'rxjs';
import { Pass } from 'src/pass/pass.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  @Get()
  getAll() {
    return this.clientesService.getAll();
  }

  @Post()
  save(@Body() client: Clients) {
    return this.clientesService.save(client);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Clients> {
    return this.clientesService.getOne(id);
  }

  @Get(':id/invoices')
  getInvoices(@Param('id', ParseIntPipe) id: number): Promise<Invoice[]> {
    return this.clientesService.getInvoices(id);
  }


  @Post(':id/invoices')
  saveInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Body() invoice: Invoice,
  ): Promise<Invoice> {
    return this.clientesService.saveInvoice(id, invoice);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() client: Clients):Promise<any> {
    return this.clientesService.updateClient(client);
  }

  

 
}
