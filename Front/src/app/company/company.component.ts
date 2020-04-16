import { Component, OnInit } from '@angular/core';
import { CompanyService} from './company.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  
})
export class CompanyComponent implements OnInit {
  companies:Observable<any[]>;
  name:string;
  constructor(private compnanyService:CompanyService) { 

  }

  ngOnInit() {
    this.companies = this.compnanyService.findAll();
    this.name="prueba"
  }

}
