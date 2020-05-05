import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad.component';
import { IncomesComponent } from './invoicing/incomes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses/expenses.component';
import { BalanceComponent } from './balance/balance.component';
import { ResumeIncomesComponent } from './resume-incomes/resume-incomes.component';
import { InsertExpenseComponent } from './expenses/insert-expense/insert-expense.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTab, MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [ContabilidadComponent,IncomesComponent, ExpensesComponent, BalanceComponent, ResumeIncomesComponent,InsertExpenseComponent],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,MatFormFieldModule, MatDatepickerModule, FormsModule, MatGridListModule,MatInputModule, MatPaginatorModule, FlexLayoutModule, MatCardModule, MatTabsModule,
    NgxChartsModule,MatIconModule, MatSlideToggleModule,MatSelectModule,MatExpansionModule,


  ],
  entryComponents:[IncomesComponent, ExpensesComponent,InsertExpenseComponent]
})
export class ContabilidadModule { }
