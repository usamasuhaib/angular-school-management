import { Component } from '@angular/core';
import { LandingFooterComponent } from '../landing-footer/landing-footer.component';
import { LandingHeaderComponent } from '../landing-header/landing-header.component';

@Component({
  selector: 'app-landing-main',
  standalone: true,
  imports: [LandingFooterComponent, LandingHeaderComponent],
  templateUrl: './landing-main.component.html',
  styleUrl: './landing-main.component.css'
})
export class LandingMainComponent {

}
