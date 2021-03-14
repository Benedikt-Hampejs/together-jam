import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms';
import {EmailService} from '../service/emailService'
import {RequestMail} from '../model/mailModel'

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {

  mail: RequestMail = {};
  mailSent: String = '' 

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  sendRequest() {
    this.emailService.sendMailRequest(this.mail).subscribe(
      response => this.mailSent = 'success'
    , response => this.mailSent = 'error');
  }
}
