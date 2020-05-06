import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pass } from './pass.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  urlPass:string;
  constructor(private http:HttpClient) {
    this.urlPass = environment.baseUrl+"/pass"
   }

   getPassActiveOneClient(id:number):Observable<Pass>{
     return this.http.get(`${this.urlPass}/${id}/passActive`) as Observable<Pass>
   }

   updatePass(pass:Pass):Observable<Pass>{
     return this.http.put<Pass>(`${this.urlPass}/${pass.idPass}/update`, pass)
   }

  }
