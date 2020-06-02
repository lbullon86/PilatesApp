import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Prices } from './price-model';
import { map } from 'rxjs/internal/operators/map';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PricesService } from './prices.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})

export class PricesComponent implements OnInit {

  prices:Observable<MatTableDataSource<any>>;
  priceData:MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'price'];  
  public price:Prices;
  themeAdd:boolean;

  constructor(private priceService:PricesService, public dialog :MatDialog, 
    public dialogRef: MatDialogRef<PricesComponent>,
    ){
    this.themeAdd = false;
    this.price= new Prices();    
    this.prices = this.priceService.findAll().pipe(map(data => this.priceData =  new MatTableDataSource(data))); 
      
   }

  ngOnInit(): void {
  }

  selectAdd(){
    this.themeAdd = true;
  }

  closeWindow(){
    this.dialogRef.close()
  }

  addPrice(){
    return this.priceService.save(this.price).subscribe(price => this.dialogRef.close(this.dialogRef) )
  }
}