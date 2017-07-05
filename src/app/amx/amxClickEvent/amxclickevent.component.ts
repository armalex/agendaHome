import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-amxclickevent',
  template: `<button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`,
  styleUrls: ['./amxclickevent.component.css']
})


export class AmxclickeventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMessage = '';

    onClickMe() {
    this.clickMessage = 'Amx test ok';
  }

}
