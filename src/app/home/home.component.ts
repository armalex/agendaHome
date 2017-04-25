import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title: string = "Agenda";
  annee :string = '2017';

  constructor() { }

  ngOnInit() {
  }

}
