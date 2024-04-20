import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {

  userProfile: any;



  // userDetails?:any;

  getImageUrl(ImagePath: string): string {
    // Construct the full URL to fetch the image from the backend
    return `http://localhost:5182/Uploads/Images/${ImagePath}`;
  }

  constructor(private userService:UserService,private http: HttpClient, private formBuilder:FormBuilder){

     
  }

  imgData=this.formBuilder.group({
    id:[''],
    file:[''],
  });

  
  updateImage(){

  }


  ngOnInit(){
    this.loadUserProfile();

 
   

  }

 



  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.error('Failed to load user profile:', error);
      }
    );
  }

}
