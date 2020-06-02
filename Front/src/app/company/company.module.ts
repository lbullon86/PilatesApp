import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { HttpClientModule } from '@angular/common/http';
import { BoxComponent } from '../box/box.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { InfoComponent } from '../info/info.component';
import { UsersComponent } from '../users/users.component';
import { PricesComponent } from '../prices/prices.component';




@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule, HttpClientModule,MatGridListModule],

})
export class CompanyModule { }
