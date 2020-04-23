import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes.component';
import { InsertClientComponent } from './insert-client/insert-client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DiarioModule } from '../diario/diario.module';


@NgModule({
  declarations: [ClientesComponent, InsertClientComponent],
  imports: [
    CommonModule, HttpClientModule, MatFormFieldModule, MatTableModule, FormsModule,
    MatSlideToggleModule, MatDatepickerModule, MatInputModule, MatButtonModule,
    AppRoutingModule, MatGridListModule,DiarioModule, MatPaginatorModule
  ],
  entryComponents: [ InsertClientComponent],

})
export class ClientesModule {
  
 }
