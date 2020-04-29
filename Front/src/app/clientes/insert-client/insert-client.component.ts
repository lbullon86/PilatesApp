import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClientesComponent } from '../clientes.component';
import { Client } from '../cliente';
import { ClientesService } from '../clientes.service';



export interface DialogData{


}

@Component({
  selector: 'app-insert-client',
  templateUrl: './insert-client.component.html',
  styleUrls: ['./insert-client.component.css']
})
export class InsertClientComponent {
  public client:Client;

  constructor(private clientService:ClientesService,
    public dialogRef: MatDialogRef<ClientesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.client = new Client()
      this.client.activeClient = false;   


    }

    addUser(){
      console.log(this.client)
      return this.clientService.save(this.client).subscribe(clients => this.dialogRef.close(this.dialogRef) )
    }

    closeWindow(){
      
      this.dialogRef.close()
    }



}
