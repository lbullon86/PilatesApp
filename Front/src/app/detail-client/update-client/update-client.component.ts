import { Component, OnInit, Inject } from '@angular/core';
import { Client } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes/clientes.service';
import { Observable } from 'rxjs';
import { DialogData, DetailClientComponent } from 'src/app/detail-client/detail-client.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  observableClient:Observable<Client>;
  client:Client;
  idClient:number;
  
  constructor(  @Inject(MAT_DIALOG_DATA) public data: DialogData,private clientService:ClientesService,
  public dialogRef: MatDialogRef<DetailClientComponent>) {
    this.idClient = data.id;
    this.client = new Client();
   }

  ngOnInit() {
    this.observableClient = this.clientService.findOne(this.idClient);
    this.observableClient.subscribe(client => this.client = client);
    
  }
  updateClient(){
    
    return this.clientService.updateClient(this.client).subscribe(client=>this.dialogRef.close());
  }
}
