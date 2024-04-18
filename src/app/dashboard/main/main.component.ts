import { Component } from '@angular/core';
import { WidgetsComponent } from '../widgets/widgets.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WidgetsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
