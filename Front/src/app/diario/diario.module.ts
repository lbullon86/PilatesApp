import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioComponent } from './diario.component';



@NgModule({
  declarations: [DiarioComponent],
  imports: [
    CommonModule
  ],
  exports: [DiarioComponent]
})
export class DiarioModule { }
