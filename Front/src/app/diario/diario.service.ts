import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from './schedule-model';
import { environment } from 'src/environments/environment';
;

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  url:string
  constructor(private http:HttpClient) {
    this.url=environment.baseUrl+"/schedule";
   }

   getDay(day:number){
     return this.http.get(`${this.url}/${day}`) as Observable <Schedule[]>
   }

   getWeek(){
     return this.http.get(`${this.url}/week`) as Observable <Schedule[][]>
   }

   update(activity:Schedule){
     return this.http.put(`${this.url}/${activity.id}`,activity) as Observable <Schedule>
   }
}