import { Component, OnInit } from '@angular/core';
import { Users } from './user-model';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { map } from 'rxjs/internal/operators/map';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Observable<MatTableDataSource<any>>;
  UserData:MatTableDataSource<any>;
  displayedColumns: string[] = ['nameUser', 'rolUser'];  
  public user:Users;
  themeAdd:boolean;

  constructor(private userService:UsersService, public dialog :MatDialog, 
    public dialogRef: MatDialogRef<UsersComponent>,
    ){
    this.themeAdd = false;
    this.user= new Users();    
    this.users = this.userService.findAll().pipe(map(data => this.UserData =  new MatTableDataSource(data))); 
   }

  ngOnInit(): void {
  }

  selectAdd(){
    this.themeAdd = true;
  }

  closeWindow(){
      
    this.dialogRef.close()
  }

  addUser(){
    return this.userService.save(this.user).subscribe(Users => this.dialogRef.close(this.dialogRef) )

  }
}
