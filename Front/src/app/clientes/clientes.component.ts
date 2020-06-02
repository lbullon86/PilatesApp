import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesService } from './clientes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import {Client} from './cliente';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InsertClientComponent } from './insert-client/insert-client.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  
})
export class ClientesComponent implements OnInit {
  clients:Observable<MatTableDataSource<any>>;
  clientsData:MatTableDataSource<any>;
  displayedColumns: string[] = ['nameClient', 'surnameClient'];  
  public client:Client;

  
     
  constructor(private clientService:ClientesService, public dialog :MatDialog){
    this.client= new Client();    
    this.client.activeClient = false; 
    this.clients = this.clientService.findAll().pipe(map(data => this.clientsData =  new MatTableDataSource(data))); 
   }

  ngOnInit() {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientsData.filter = filterValue.trim().toLowerCase();
      
  }

  openDialog():void{
    const dialogRef = this.dialog.open(InsertClientComponent, {
      width: '450px',
      height:'500px'    
           
    })
    dialogRef.afterClosed().subscribe(clientes => this.clients = this.clientService.findAll().pipe(map(data => new MatTableDataSource(data))) )
    ;

  }
  
 
}