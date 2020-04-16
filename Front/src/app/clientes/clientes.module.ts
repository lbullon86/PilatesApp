import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './clientes.component';
import { InsertClientComponent } from './insert-client/insert-client.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatSlideToggleModule, MatDatepickerModule, MatInputModule, MatButtonModule, MatGridListModule, MatPaginatorModule } from '@angular/material';
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
