import { Component, OnInit, ɵɵsanitizeUrlOrResourceUrl } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { MatDialog } from '@angular/material/dialog';
import { PricesComponent } from '../prices/prices.component';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  addUser(): void {
    let dialogRef = this.dialog.open(UsersComponent, {
      width: "450px",
      height: "500px",

    });
    dialogRef.afterClosed().subscribe()    

  }
  addPrice(): void {
    let dialogRef = this.dialog.open(PricesComponent, {
      width: "450px",
      height: "500px",

    });
    dialogRef.afterClosed().subscribe()    

  }
  addInfo(): void {
    let dialogRef = this.dialog.open(InfoComponent, {
      width: "450px",
      height: "500px",

    });
    dialogRef.afterClosed().subscribe()    

  }
}
