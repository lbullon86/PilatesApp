import { Component, OnInit } from '@angular/core';
import { DiarioService } from './diario.service';
import { Activity } from '../schedule/add-activity/activity-model';
import { MatDialog } from '@angular/material/dialog';
import { UpdateScheduleComponent } from '../update-schedule/update-schedule.component';
import { AddActivityComponent } from '../schedule/add-activity/add-activity.component';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  schedule:Activity[];
  date:Date
  constructor(
    private serviceSchedule:DiarioService,
    public dialog: MatDialog

  ) {
    this.date = new Date()

   }

  ngOnInit() {
    this.getDay()
  }

  async getDay(){
    await this.serviceSchedule.getDay(this.date.getDay()-1).subscribe(day => this.schedule = day)
    
  }

  modalUpdate(activity: Activity) {
    const dialogRef = this.dialog.open(UpdateScheduleComponent, {
      width: "450px",
      height: "450px",
      data: { id: activity.id }
    });
    dialogRef.afterClosed().subscribe(week => this.getDay());
  }

  addActivity() {
    const dialogRef = this.dialog.open(AddActivityComponent, {
      width: "450px",
      height: "450px"
    });
    dialogRef.afterClosed().subscribe(week => this.getDay());

  }

}
