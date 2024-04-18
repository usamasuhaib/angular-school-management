import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { LoginUser } from './login-user.model';
import { Observable } from 'rxjs';
import { jwtAuth } from './jwtAuth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl="http://localhost:5182";

  constructor(private httpClient:HttpClient, private router:Router) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken(); // Check if token exists
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']); // Redirect to login page after logout
  }



  createUser(user:User):Observable<jwtAuth>{
    return this.httpClient.post<jwtAuth>(this.baseUrl+"/api/Authentication/Register",user);
  }

  login(data:LoginUser):Observable<jwtAuth>{
    return this.httpClient.post<jwtAuth>(this.baseUrl+"/api/Authentication/Login",data)
  }



}
