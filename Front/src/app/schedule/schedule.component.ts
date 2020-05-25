import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DiarioService } from "../diario/diario.service";
import { Activity } from "../schedule/add-activity/activity-model";
import { MatDialog } from "@angular/material/dialog";
import { UpdateScheduleComponent } from "../update-schedule/update-schedule.component";
import { ActivatedRoute } from "@angular/router";
import { AddActivityComponent } from "./add-activity/add-activity.component";

export interface DataUpdate {
  id: number;
}
@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  week: Activity[][];
  scheduleTable: MatTableDataSource<any>;
  activities = [];

  constructor(
    private serviceSchedule: DiarioService,
    public dialog: MatDialog
  ) {
    this.week = [];
  }

  ngOnInit() {
    this.getWeek();
  }

  getWeek() {
    this.serviceSchedule.getWeek().subscribe(week => (this.week = week));
  }
  modalUpdate(activity: Activity) {
    const dialogRef = this.dialog.open(UpdateScheduleComponent, {
      width: "450px",
      height: "450px",
      data: { id: activity.id }
    });
    dialogRef.afterClosed().subscribe(week => this.getWeek());
  }

  addActivity() {
    const dialogRef = this.dialog.open(AddActivityComponent, {
      width: "450px",
      height: "450px"
    });
    dialogRef.afterClosed().subscribe(week => this.getWeek());

  }
}
