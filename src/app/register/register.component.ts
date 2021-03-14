import { Component, OnInit } from '@angular/core';
import {EmailService} from '../service/emailService';
import { NgForm, FormGroup} from '@angular/forms';
import {RegisterMail} from '../model/mailModel'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mail: RegisterMail = {}
  mailSent: String = '' 

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }


  sendRequest() {
    this.emailService.sendMailRegister(this.mail).subscribe(
      response => this.mailSent = 'success'
    , response => this.mailSent = 'error');
  }

}
