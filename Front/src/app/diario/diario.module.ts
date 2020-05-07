import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioComponent } from './diario.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [DiarioComponent],
  imports: [
    CommonModule,MatCardModule,FlexLayoutModule,MatIconModule
  ],
  exports: [DiarioComponent]
})
export class DiarioModule { }
