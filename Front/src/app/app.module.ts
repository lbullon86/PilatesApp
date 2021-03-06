import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { CompanyModule} from './company/company.module';
import { MatTableModule} from '@angular/material/table';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { ClientesModule } from './clientes/clientes.module';
import { DetailClientModule } from './detail-client/detail-client.module';
import { DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout' ;
import { ContabilidadModule } from './contabilidad/contabilidad.module';
import { HeaderComponent } from './header/header.component';
import { ScheduleModule } from './schedule/schedule.module';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { BoxComponent } from './box/box.component';
import { UsersComponent } from './users/users.component';
import { PricesComponent } from './prices/prices.component';
import { InfoComponent } from './info/info.component';
import { UsersModule } from './users/users.module';
import { PricesModule } from './prices/prices.module';



@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    HeaderComponent
 
       
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule, 
    CompanyModule,
    MatTableModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatNativeDateModule,
    ClientesModule,
    ContabilidadModule,
    DetailClientModule,
    FlexLayoutModule,
    ScheduleModule,
    UsersModule,
    PricesModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
