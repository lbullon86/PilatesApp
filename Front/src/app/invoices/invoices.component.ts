import { Component, OnInit } from "@angular/core";
import { InvoicesService } from "./invoices.service";
import { Observable } from "rxjs";
import { Pay } from "../detail-client/add-pay/pay-model";
import { ClientesService } from "../clientes/clientes.service";
import { MatTableDataSource } from "@angular/material/table";
import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Client } from "../clientes/cliente";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.css"]
})
export class InvoicesComponent implements OnInit {
  invoicesObservable: Observable<Pay[]>;
  invoices: Observable<MatTableDataSource<Pay>>;
  displayedColumns: string[] = ["dateInvoice", "concept", "quantity"];
  idClient: number;
  client: Observable<Client>;
  
  constructor(
    private serviceClient: ClientesService,
    private route: ActivatedRoute,
    private datepipe:DatePipe
  ) {
    
  }
  
  parseDate(date:Date)
  {
    return this.datepipe.transform(date, 'dd-mm-yyyy');
      
  }



  ngOnInit() {
    
    this.invoices = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.idClient = +params.get("id");
        return this.serviceClient
          .getInvoicesOneClient(this.idClient)
          .pipe(map(data => new MatTableDataSource(data)));
      })
    );
  }
}
