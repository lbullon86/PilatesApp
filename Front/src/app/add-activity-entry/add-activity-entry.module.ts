import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddActivityEntryComponent } from './add-activity-entry.component'



@NgModule({
  declarations: [AddActivityEntryComponent],
  imports: [
    CommonModule
  ],
  exports:[AddActivityEntryComponent]
})
export class AddActivityEntryModule { }
