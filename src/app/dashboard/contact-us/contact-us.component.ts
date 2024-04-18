import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailDto } from '../../shared/email-dto.model';
import { EmailService } from '../../shared/email.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule ,ToastrModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  
  constructor(private formBuilder:FormBuilder, private router:Router,
     private emailService:EmailService, private toaster:ToastrService)
     {                }

  emailDto=this.formBuilder.group({
    from:['',[Validators.required, Validators.email]],
    subject:['',[Validators.required]],
    body:['',[Validators.required]]

  });

  sendEmail(){

    console.log(this.emailDto.value);
    const data: EmailDto = {
      from: this.emailDto.value.from!,
      subject:this.emailDto.value.subject!,
      body:this.emailDto.value.body!
    }

    this.emailService.sendEmail(data).subscribe(response => {
      console.log(response);
      this.toaster.success("Email Send Successfully")
      this.router.navigate(['/dashboard']);
    });

  }

}
