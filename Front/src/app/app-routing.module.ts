import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContabilidadComponent} from '../app/contabilidad/contabilidad.component';
import {ClientesComponent} from '../app/clientes/clientes.component';
import { AppComponent } from './app.component';
import { CompanyComponent} from './company/company.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  {path:'contabilidad', component:ContabilidadComponent},
  {path:'clientes', component:ClientesComponent},
  {path: 'company', component:CompanyComponent},
  {path: '.', component:AppComponent},
  {path: 'detailClient/:id', component:DetailClientComponent},
  {path: 'home', component:ScheduleComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
