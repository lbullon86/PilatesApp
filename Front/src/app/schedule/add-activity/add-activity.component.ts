import { Component, OnInit } from '@angular/core';
import { ActivityEntryComponent } from 'src/app/activity-entry/activity-entry.component';
import { Activity } from './activity-model';
import { DiarioService } from 'src/app/diario/diario.service';
import { ScheduleComponent } from '../schedule.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  activities =[];
  days =[]
  activity:Activity;
  hour:string;
  minutes:string;


  constructor(private readonly serviceDiario:DiarioService,
    public dialogRef: MatDialogRef<ScheduleComponent>,
    ) {
    this.activities =["Total Barre", "Reformer", "Individual", "Iniciación", "Mat"]
    this.days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    this.activity = new Activity()
    this.hour;
    this.minutes;

   }

  ngOnInit(): void {
  }

  saveActivity(){
    this.activity.hour = parseInt(this.hour)+":"+parseInt(this.minutes);
    this.serviceDiario.save(this.activity).subscribe(activity=> this.close());

    


  }
  close(){
    this.dialogRef.close()
  }

}
