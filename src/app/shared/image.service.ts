import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageDto } from './image-dto.=model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl="http://localhost:5182";

  constructor(private httpClient:HttpClient) { }

  getImages(){
    return this.httpClient.get(this.baseUrl+"/api/Image/Get");
  }
}
