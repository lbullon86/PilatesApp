import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {
  nombre:string;
  constructor() { }

  ngOnInit() {
    this.nombre= "monica"
  }

}
