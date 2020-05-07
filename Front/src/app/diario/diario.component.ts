import { Component, OnInit } from '@angular/core';
import { DiarioService } from './diario.service';
import { Schedule } from './schedule-model';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  schedule:Schedule[];
  date:Date
  constructor(
    private serviceSchedule:DiarioService,
  ) {
    this.date = new Date()

   }

  ngOnInit() {
    this.getDay()
  }

  async getDay(){
    await this.serviceSchedule.getDay(this.date.getDay()).subscribe(day => this.schedule = day)
    
  }

}
