import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pr-amxcodedrivenform',
  templateUrl: './amxcodedrivenform.component.html',
  styleUrls: ['./amxcodedrivenform.component.css']
})
export class AmxcodedrivenformComponent implements OnInit {

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);


    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

   reset() {
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  register() {
    console.log(this.userForm.value);
  }

}
