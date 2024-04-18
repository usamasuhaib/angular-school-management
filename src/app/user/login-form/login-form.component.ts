import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../../authentication/login-user.model';
import { AuthenticationService } from '../../authentication/authentication.service';
import { response } from 'express';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthenticationService) {

  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  });

  onLogin() {

    console.log(this.loginForm.value);
    const data: LoginUser = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    }

    this.authService.login(data).subscribe(
      (response) => {
        if (response.success && response.token) {
          // Save token to localStorage
          localStorage.setItem('token', response.token);
          console.log(response.token);

          // Redirect to dashboard or desired route
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Login failed'); // Handle invalid response
        }
      },
      (error) => {
        console.error('Login error:', error); // Handle HTTP error
      }
    );


  }

}
