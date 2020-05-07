import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleComponent } from './schedule.component';
import { ActivityEntryModule } from '../activity-entry/activity-entry.module'



@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,FlexLayoutModule,ActivityEntryModule
  ],


})
export class ScheduleModule { }
