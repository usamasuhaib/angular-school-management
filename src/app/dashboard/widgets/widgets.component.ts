import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserDoctor, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { StudentService } from '../../shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  studentCount: number = 0;
  faUser=faUserGraduate;
  faUser1=faUserDoctor;


  constructor(private stdService:StudentService,private router:Router){

  }

  ngOnInit(){
    this.fetchStudentCount();
  }

  fetchStudentCount(){
    this.stdService.getStudentCount().subscribe((Count)=>{
      this.studentCount = Count;
    })
  }

  onStudent(){
this.router.navigate(['/std-list']);
  }
}
