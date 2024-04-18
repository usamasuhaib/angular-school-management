import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:5182";

  constructor(private httpClient:HttpClient) { }


  getUserProfile():Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"/api/Authentication/Profile");
  }


}
