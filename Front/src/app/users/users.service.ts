import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public urlUser:string;

  constructor(private http:HttpClient){ 
    this.urlUser = environment.baseUrl+  '/users';

  }
  findAll():Observable<Object[]>{
    return this.http.get(this.urlUser) as Observable <Users[]>

  }


  save(user:Users):Observable<Object>{
    return this.http.post<Users>(this.urlUser,user); 
  }

}
