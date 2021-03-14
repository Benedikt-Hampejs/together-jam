import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestMail} from '../model/mailModel'


const BASE_URL = 'http://localhost:3000/api/';
@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendMailRequest(mail: any) {
    return this.http.post(BASE_URL + "request", mail, {observe: 'response', responseType: 'text'});
  }

  sendMailRegister(mail: any) {
    return this.http.post(BASE_URL + "register", mail, {observe: 'response', responseType: 'text'});
  }


}


