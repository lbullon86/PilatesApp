import { Component, OnInit, Inject } from '@angular/core';
import { AttendanceService } from './attendance.service';
import { Pass } from './pass.model';
import { Observable } from 'rxjs';
import { DetailClientComponent, DialogData } from '../detail-client.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { isNumber } from 'util';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {
  urlAttendance:string;
  pass:Pass;
  newDateClass:Date;
  passObservable:Observable<Pass>;
  passActive:Boolean;

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private passService:AttendanceService,
    public dialogRef: MatDialogRef<DetailClientComponent>,
    ) {

      this.pass = new Pass()
      this.newDateClass = new Date()
      
      this.passService.getPassActiveOneClient(this.data.id).subscribe(pass => this.pass = pass);
     

   }

  ngOnInit() {
    alert(this.pass.idPass)

   
     
  }

  addAttendance(){
    this.pass.dates.push(this.newDateClass)
    this.pass.numberClasses = this.pass.numberClasses -1;
    this.passService.updatePass(this.pass).subscribe(pass => this.passService.getPassActiveOneClient(this.data.id).subscribe(pass => this.pass = pass))
    this.dialogRef.close();
  }


}
