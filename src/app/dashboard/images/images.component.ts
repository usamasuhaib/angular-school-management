import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../shared/image.service';
import { ImageDto } from '../../shared/image-dto.=model';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

  imgList?:any;


    constructor(private router:Router, private imgService:ImageService){

  }

  
  ngOnInit(){
 
    this.imgService.getImages().subscribe((response)=>{
      this.imgList=response;
      console.log(response);
    },(error)=>{
      console.error('Access Error :', error); // Handle HTTP error
    }
  );


  }



  getImageUrl(imageFileName: string): string {
    // Construct the full URL to fetch the image from the backend
    return `http://localhost:5182/Uploads/Images/${imageFileName}`;
  }

}
