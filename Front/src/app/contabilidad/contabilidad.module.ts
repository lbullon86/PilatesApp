import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContabilidadComponent } from './contabilidad.component';
import { IncomesComponent } from './incomes/incomes.component';
import {  MatTableModule } from '@angular/material';



@NgModule({
  declarations: [ContabilidadComponent,IncomesComponent],
  imports: [
    CommonModule,MatTableModule,
  ],
  entryComponents:[IncomesComponent]
})
export class ContabilidadModule { }
