import { Component, OnInit } from '@angular/core';
import { DiarioService } from './diario.service';
import { Schedule } from './schedule-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  schedule:Schedule[];
  constructor(
    private serviceSchedule:DiarioService
  ) {
    
   }

  ngOnInit() {
    this.getDay()
  }

  async getDay(){
    await this.serviceSchedule.getDay(0).subscribe(day => this.schedule = day)
    
  }

}
