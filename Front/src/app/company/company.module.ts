import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class CompanyModule { }
