import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CompanyModule } from './company/company.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PayrollsModule } from './payrolls/payrolls.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PassModule } from './pass/pass.module';
import { PricesModule } from './prices/prices.module';

@Module({
  imports: [CoreModule, CompanyModule, UsersModule, ClientesModule, ExpensesModule, PayrollsModule, InvoiceModule, PassModule, PricesModule],
  
})
export class AppModule {}
