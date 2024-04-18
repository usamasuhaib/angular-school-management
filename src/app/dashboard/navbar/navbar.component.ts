import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router:Router, private userService:UserService){

}

userProfile: any;
ngOnInit(): void {
  this.loadUserProfile();
}

onAccount(){
  this.router.navigate(['/account'])

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
