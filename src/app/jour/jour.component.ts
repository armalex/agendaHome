import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.css']
})
export class JourComponent implements OnInit {


  jour: string;
  date: number;

    jourLibelle: String;
    jourNumero: number;

  constructor() { }

  ngOnInit() {
  }

}
