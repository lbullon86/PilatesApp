import { Component, OnInit } from '@angular/core';
import { BalanceService } from './balance.service';
import { Balance } from './balance-model';
import { BalanceModule } from './balance.module';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance: Balance;
  balanceMonths: Balance[]
  dateToday:Date;
  //options Chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Beneficios';
  dataBalance = []

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  constructor(private serviceBalance:BalanceService) {
    this.balance = new Balance()
    this.balanceMonths =[]
    this.dateToday = new Date();
   }

  ngOnInit() {
    //this.serviceBalance.getBalanceGlobal().subscribe(balance => this.balance = balance);
    this.serviceBalance.getBalanceMonths(2020).subscribe(balance =>{this.balanceMonths = balance, this.getDataBalance()})
  }


  getDataBalance(){
    this.dataBalance = [
      {
        name:"Enero",
        value:this.balanceMonths[0].sum
      },
      {
        name:"Febrero",
        value:this.balanceMonths[1].sum
      },
      {
        name:"Marzo",
        value:this.balanceMonths[2].sum
      },
      {
        name:"Abril",
        value:this.balanceMonths[3].sum
      },
      {
        name:"Mayo",
        value:this.balanceMonths[4].sum
      },
      {
        name:"Junio",
        value:this.balanceMonths[5].sum
      },
      {
        name:"Julio",
        value:this.balanceMonths[6].sum
      },
      {
        name:"Agosto",
        value:this.balanceMonths[7].sum
      },
      {
        name:"Septiembre",
        value:this.balanceMonths[8].sum
      },
      {
        name:"Octubre",
        value:this.balanceMonths[9].sum
      }
      ,
      {
        name:"Noviembre",
        value:this.balanceMonths[10].sum
      },
      {
        name:"Diciembre",
        value:this.balanceMonths[11].sum
      }
    ]

  }

}
