import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';
import { StudentService } from '../../shared/student.service';
import {  Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-std-list',
  standalone: true,
  imports: [CommonModule, ToastrModule],
  templateUrl: './std-list.component.html',
  styleUrl: './std-list.component.css'
})
export class StdListComponent {
  stdList:Student[]=[];

  constructor(private stdService:StudentService, private router:Router , private toaster:ToastrService){

  }

  ngOnInit(){
 
    this.stdService.geAlltStudents().subscribe((response)=>{
      this.stdList=response;
      console.log(response);
    },(error)=>{
      console.error('Access Error :', error); // Handle HTTP error
    }
  );


  }

  onEdit(id:any){
    this.router.navigate(['/std-form/'+id]);
  }
  onDelete(id:any){
    this.stdService.deleteStudent(id).subscribe(()=>{
      console.log("Delete Success");
      this.refreshlist();
    });
  }

  private refreshlist(){
    this.stdService.geAlltStudents().subscribe(result=>{
      this.stdList=result;

      this.toaster.success("Record Deleted Successfully")
      this.router.navigate(['/std-list'])

    });
  }

}
