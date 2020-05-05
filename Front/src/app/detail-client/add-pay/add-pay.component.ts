import { Component, OnInit, Inject } from "@angular/core";
import {
  DialogData,
  DetailClientComponent
} from "../detail-client.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Pay } from "./pay-model";
import { ClientesService } from "src/app/clientes/clientes.service";
import { Client } from "src/app/clientes/cliente";
import { Observable } from "rxjs";
import { AddPayService } from "src/app/add-pay.service";
import { Price } from "./price-model";
import { Pass } from "../add-attendance/pass.model";
import { identifierModuleUrl } from "@angular/compiler";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-add-pay",
  templateUrl: "./add-pay.component.html",
  styleUrls: ["./add-pay.component.css"]
})
export class AddPayComponent implements OnInit {
  public pay: Pay;
  public clients: Observable<Client>;
  public prices: Array<Price>;
  public client: Client;
  private idClient: number;
  private pricesObservable: Observable<Price[]>;
  public priceSelected: Price;
  public comb: boolean;
  public quantity: number;
  public pass: Pass;
  public dateInvoice:Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clienteService: ClientesService,
    public dialogRef: MatDialogRef<DetailClientComponent>,
    private priceService: AddPayService,
    private datePipe:DatePipe
  ) {
    this.pay = new Pay();
    this.client = new Client();
    this.idClient = data.id;
    this.priceSelected = new Price();
    this.pay.taxes = 21;
    this.pay.concept;
    this.comb = false;
    this.dateInvoice = new Date();
  }

  ngOnInit() {
    this.clients = this.clienteService.findOne(this.idClient);
    this.clients.subscribe(client => (this.client = client));
    this.pricesObservable = this.priceService.getAllPrices();
    this.pricesObservable.subscribe(
      pricesObservable => (this.prices = pricesObservable)
    );
  }


  savePay() {
    this.pay.concept = this.priceSelected.name;
    this.pay.client = this.client;
    this.pay.taxes = 21;   
      this.priceService
        .savePay(this.pay)
        .subscribe(
          addPay => this.dialogRef.close(this.dialogRef)
        );    
  }

 


  getPrice() {
    if (this.pay.periodicity == 1 && this.comb) {
      this.pay.quantity = this.discountComb(this.priceSelected.price);
      return this.pay.quantity;
    }
    if (this.pay.periodicity == 1) {
      this.pay.quantity = this.priceSelected.price;
      return this.pay.quantity;
    }
    if (this.pay.periodicity == 3 && this.comb) {
      this.pay.quantity = this.discountComb(
        this.discountTrim(this.priceSelected.price)
      );
      return this.pay.quantity;
    } else if (this.pay.periodicity == 3) {
      this.pay.quantity = this.discountTrim(this.priceSelected.price);
      return this.pay.quantity;
    }
  }

  discountTrim(price: number) {
    return Math.round(price * 0.9 * 3);
  }
  discountComb(price: number) {
    return Math.round(price * 0.95 * 100) / 100;
  }
  closeWindow() {
    this.dialogRef.close();
  }
}
