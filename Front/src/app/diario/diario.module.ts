import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioComponent } from './diario.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [DiarioComponent],
  imports: [
    CommonModule,MatCardModule
  ],
  exports: [DiarioComponent]
})
export class DiarioModule { }
