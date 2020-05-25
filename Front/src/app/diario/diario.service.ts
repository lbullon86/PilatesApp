import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../schedule/add-activity/activity-model';
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
     return this.http.get(`${this.url}/${day}`) as Observable <Activity[]>
   }

   getWeek(){
     return this.http.get(`${this.url}/week`) as Observable <Activity[][]>
   }

   update(activity:Activity){
     return this.http.put(`${this.url}/${activity.id}`,activity) as Observable <Activity>
   }

   save(activity:Activity):Observable<Activity>{
     alert(activity.name)
     return this.http.post<Activity>(this.url,activity); 

   }

   delete(id:number){
     return this.http.delete(`${this.url}/${id}/delete`)

   }
}