import { Component } from '@angular/core';
import {UsersService} from '../services/user.service';

@Component({
  selector: 'mail-root',
  templateUrl: 'mail.component.html',
  styleUrls: ['mail.component.css']
})
export class MailComponent {
  newUser= {
    username: '',
    password: ''
  }
  
  constructor(private userservice: UsersService) {}
  
  addUser() {
    this.userservice.addNew(this.newUser);
  }
}