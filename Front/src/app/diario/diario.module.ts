import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiarioComponent } from './diario.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { AddActivityEntryModule } from '../add-activity-entry/add-activity-entry.module';
import { ActivityEntryComponent } from '../activity-entry/activity-entry.component';
import { AddActivityComponent } from '../schedule/add-activity/add-activity.component';
import { ActivityEntryModule } from '../activity-entry/activity-entry.module';



@NgModule({
  declarations: [DiarioComponent],
  imports: [
    CommonModule,MatCardModule,FlexLayoutModule,MatIconModule,AddActivityEntryModule,ActivityEntryModule
  ],
  exports: [DiarioComponent],
  entryComponents: [AddActivityComponent,ActivityEntryComponent]
})
export class DiarioModule { }
