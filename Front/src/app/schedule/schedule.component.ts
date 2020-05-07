import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DiarioService } from '../diario/diario.service';
import { Schedule } from '../diario/schedule-model';
import { MatDialog } from '@angular/material/dialog';
import { UpdateScheduleComponent } from '../update-schedule/update-schedule.component'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  week:Schedule[][]
  scheduleTable:MatTableDataSource<any>;


  constructor(private serviceSchedule:DiarioService,   
     private route: ActivatedRoute,
     public dialog :MatDialog) {
    this.week = []
   }

  ngOnInit(){
    this.serviceSchedule.getWeek().subscribe(week => this.week = week)
  }

  modalUpdate(activity:Schedule){
    alert(activity.id)
    const dialogRef = this.dialog.open(UpdateScheduleComponent, {
      width: '450px',
      height:'450px',
      
           
    })
   // dialogRef.afterClosed().subscribe(clientes => this.clients = this.clientService.findAll().pipe(map(data => new MatTableDataSource(data))) )
    ;  }

  updateSchedule(){

  }

  addClass(){

  } 

}