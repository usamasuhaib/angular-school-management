import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailDto } from './email-dto.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseUrl="http://localhost:5182";

  constructor(private httpClient:HttpClient) { }

  sendEmail(email:EmailDto){
    return this.httpClient.post(this.baseUrl+"/api/Email/Send",email);
  }
}
