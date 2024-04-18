import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { LandingMainComponent } from './landing-page/landing-main/landing-main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent, NavbarComponent, LandingMainComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router:Router){

  }

  isRegisterOrLoginRoute(): boolean {
    // Get the current route URL
    const currentUrl = this.router.url;
    // Check if the current route is 'register' or 'login'
    return currentUrl.includes('/register') || currentUrl.includes('/login');
  }

  isLandingPageRoute(): boolean {
    // Check if current route is a landing page route
    const currentUrl = this.router.url;
    return currentUrl.includes('welcome') || currentUrl === '/';
  }


  
  title = 'student-management-system';
}
