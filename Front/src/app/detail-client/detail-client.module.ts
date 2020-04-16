import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatGridListModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatGridTile, MatSelectModule, MatSlideToggle, MatSlideToggleModule, MatTableModule } from '@angular/material';
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
