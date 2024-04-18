import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../shared/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../shared/student.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-std-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ToastrModule ],
  templateUrl: './std-form.component.html',
  styleUrl: './std-form.component.css'
})
export class StdFormComponent {

  constructor(private stdService:StudentService, private router:Router,
     private formBuilder:FormBuilder, 
     private activeRoute:ActivatedRoute, private toaster:ToastrService){

  }

  stdForm=this.formBuilder.group({
    id:[''],
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    phone:['']
  });

  stdId?:number;
  isEdit=false;

  ngOnInit(){
    this.stdId=this.activeRoute.snapshot.params['id'];

    if(this.stdId){
      this.isEdit=true;

      this.stdService.getStudent(this.stdId).subscribe(result=>{
        console.log(result);
      this.stdForm.patchValue(result);
      })
    }
}

  save(){
    console.log(this.stdForm.value);
    const student:Student={
      name:this.stdForm.value.name!,
      email:this.stdForm.value.email!,
      phone:this.stdForm.value.phone!,
    }
    if (this.isEdit) {
      student.id = this.stdForm.value.id!;
    }
 

    if(this.isEdit){
      this.stdService.updateStudent(this.stdId,student).subscribe(()=>{
        console.log("Record Updated Successfully")
        this.toaster.success("Record Updated Successfully")
        this.router.navigate(['/std-list'])
      })
    }
    else{
      this.stdService.addStudent(student).subscribe(()=>{
        console.log("Student Added Successfully")
        this.toaster.success("Record Added Successfully")

        this.router.navigate(['/std-list'])
      })
    }

    
  }

}
