import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDto } from './image-dto.=model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:5182";
  private apiUrl = 'http://localhost:5182/api/profile/upload';

  constructor(private httpClient:HttpClient) { }


  getUserProfile():Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"/api/Profile/Details");
  }

  uploadProfileImage(file: File, userId: string):Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.patch(this.apiUrl, formData, {
      params: { id: userId },
      responseType: 'text' // Specify the response type as 'text'
    });
  }



}
