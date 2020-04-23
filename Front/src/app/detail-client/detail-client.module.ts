import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { DetailClientComponent } from './detail-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { AddPayComponent } from './add-pay/add-pay.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { DiarioModule } from '../diario/diario.module';
import { FormsModule } from '@angular/forms';
import { InvoicesComponent } from '../invoices/invoices.component';



@NgModule({
  declarations: [DetailClientComponent, UpdateClientComponent, AddPayComponent, AddAttendanceComponent,InvoicesComponent],
  imports: [
    CommonModule,AppRoutingModule,DiarioModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatInputModule,
    MatGridListModule, MatSelectModule, FormsModule, MatSlideToggleModule, MatTableModule
  ],
  entryComponents:[UpdateClientComponent,AddPayComponent,AddAttendanceComponent, InvoicesComponent]
})
export class DetailClientModule { }
