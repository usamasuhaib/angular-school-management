import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../shared/student.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { User } from '../../authentication/user.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, ToastrModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  constructor(private router:Router, private formBuilder:FormBuilder,
     private activeRoute:ActivatedRoute, private authService:AuthenticationService,
     private toaster:ToastrService
  ){

  }

  registrationForm=this.formBuilder.group({
    id:[''],
    userName:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required]]

  });

  register(){
    console.log(this.registrationForm.value);
    const user:User={
      userName:this.registrationForm.value.userName!,
      email:this.registrationForm.value.email!,
      password:this.registrationForm.value.password!,
    }

    this.authService.createUser(user).subscribe(()=>{
      console.log("User Registered Succesfully")

      this.toaster.success("user Registered Successfully")
      this.router.navigate(['./user/login'])

    })

  }

}
