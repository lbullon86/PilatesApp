import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CompanyModule } from './company/company.module';
import { UsersModule } from './users/users.module';
import { ClientesModule } from './clientes/clientes.module';
import { ExpensesModule } from './expenses/expenses.module';
import { PayrollsModule } from './payrolls/payrolls.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PassModule } from './pass/pass.module';
import { PricesModule } from './prices/prices.module';
import { BalanceModule } from './balance/balance.module';
import { ScheduleModule } from './schedule/schedule.module';
import { FrontendMiddleware } from './core/middleware/frontend.middleware';

@Module({
  imports: [CoreModule, CompanyModule, UsersModule, ClientesModule, ExpensesModule, PayrollsModule, InvoiceModule, PassModule, PricesModule, BalanceModule, ScheduleModule],
  providers: [],
  
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendMiddleware)
      .forRoutes({
          path: '/**', // For all routes
          method: RequestMethod.ALL // For all methods
        }
      );
  }
}
