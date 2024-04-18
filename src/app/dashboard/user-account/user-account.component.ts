import { Component } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent {

  userProfile: any;

  constructor(private userService:UserService){

  }
  ngOnInit(): void {
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
