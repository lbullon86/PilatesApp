import { Component, OnInit } from '@angular/core';
import { ResumeIncomesService } from './resume-incomes.service';
import { Observable } from 'rxjs';
import { Invoicing } from '../invoicing/invoicing-model';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { IncomesComponent } from '../invoicing/incomes.component';

@Component({
  selector: 'app-resume-incomes',
  templateUrl: './resume-incomes.component.html',
  styleUrls: ['./resume-incomes.component.css']
})

export class ResumeIncomesComponent implements OnInit  {
  quartersObservable:Observable<MatTableDataSource<any>>;
  quarters:MatTableDataSource<any>;  
  displayedColumns: string[] = ['sum'];

  constructor(
    
    private serviceInvoicing:ResumeIncomesService,
    
  ) { 
  
    this.quartersObservable = this.serviceInvoicing.getQuarterInvoicing().pipe(map(data =>this.quarters = new MatTableDataSource(data)))  

  }

  ngOnInit() {
    
    
  
  }

}
