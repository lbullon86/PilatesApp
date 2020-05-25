import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScheduleComponent, DataUpdate } from '../schedule/schedule.component';
import { Activity } from '../schedule/add-activity/activity-model';
import { DiarioService } from '../diario/diario.service';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  activity:Activity;
  constructor(private serviceSchedule:DiarioService,   
    @Inject(MAT_DIALOG_DATA) public data: DataUpdate,

    public dialogRef: MatDialogRef<ScheduleComponent>,
    

  ) {
    this.activity = new Activity();
    this.activity.id = data.id;
   }

  ngOnInit(): void {
    alert("hola "+ this.activity.id)
  }


  delete(){
    this.serviceSchedule.delete(this.activity.id).subscribe(activity=>this.dialogRef.close())
    
    
  }
}
