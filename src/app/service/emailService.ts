import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestMail} from '../model/mailModel'


const BASE_URL = 'http://localhost:3000/api/';
@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendMailRequest(mail: any): Observable<RequestMail> {
    return this.http.post<RequestMail>(BASE_URL + "request", mail);
  }

  /*sendMailSign(mail: any): Observable<Task> {
    return this.http.post<Task>(BASE_URL + "sign", mail);
  }*/


}


