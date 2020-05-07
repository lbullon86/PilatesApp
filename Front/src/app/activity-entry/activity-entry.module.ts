import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityEntryComponent } from './activity-entry.component';



@NgModule({
  declarations: [ActivityEntryComponent],
  imports: [
    CommonModule
  ],
  exports:[ActivityEntryComponent]

})
export class ActivityEntryModule { }
