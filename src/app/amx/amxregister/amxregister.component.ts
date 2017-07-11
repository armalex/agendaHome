import { Component, OnInit } from '@angular/core';


class User {
  username: string;
  password: string;
}

@Component({
  selector: 'pr-amxregister',
  templateUrl: './amxregister.component.html',
  styleUrls: ['./amxregister.component.css']
})
export class AmxregisterComponent implements OnInit {
  user = new User();

  constructor() { }

  ngOnInit() {
  }

   register(user) {
    console.log(this.user);
  }

}
