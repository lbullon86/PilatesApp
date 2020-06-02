import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {  MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PricesComponent } from './prices.component';



@NgModule({
  declarations: [PricesComponent],
  imports: [
    CommonModule,MatTableModule,MatGridListModule,MatFormFieldModule, MatInputModule,FormsModule, MatButtonModule
  ]
})
export class PricesModule { }
