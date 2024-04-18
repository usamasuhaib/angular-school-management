import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css'
})
export class LandingHeaderComponent {

  constructor(private router:Router){

  }

  onLogin(){
this.router.navigate(['/user/login'])
  }
  onDashboard(){
    this.router.navigate(['/dashboard'])

  }

}
