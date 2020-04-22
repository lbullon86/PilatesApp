import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {
  route:string;
  incomes:string= "incomes";
  balance:string ="balance";
  expenses:string="expenses"
  constructor() { }

  ngOnInit() {
    this.route= "balance"
  }

  routing(section:string){
    this.route = section

  }
}
