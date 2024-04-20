import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faCoffee ,faDashboard, faUserGraduate} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
faDashboard=faDashboard
faStd=faUserGraduate
faPhone=faDashboard
faAdd=faAdd

constructor(private router:Router){

}

onDashboard(){
  this.router.navigate(['/dashboard'])

}
onList(){
  this.router.navigate(['/std-list'])

}
onForm(){
this.router.navigate(['/std-form'])
}
onEmail(){
  this.router.navigate(['/contact-us'])

}

onImages(){
  this.router.navigate(['/images']);
}


}
