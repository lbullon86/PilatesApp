import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './clientes.entity';
import { InvoiceService } from 'src/invoice/invoice.service';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { PassModule } from 'src/pass/pass.module';

@Module({
  controllers: [ClientesController],
  imports:[TypeOrmModule.forFeature([Clients]), InvoiceModule, PassModule],
  providers: [ClientesService],

})
export class ClientesModule {}
