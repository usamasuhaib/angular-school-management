import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:5182";

  constructor(private httpClient:HttpClient) { }

  geAlltStudents(){
    return this.httpClient.get<Student[]>(this.baseUrl+"/api/Student");
   }
   getStudentCount():Observable<number> {
    return this.httpClient.get<number>(this.baseUrl+"/api/Student/Count");
  }

   addStudent(student:Student){
    return this.httpClient.post(this.baseUrl+"/api/Student/Create",student);
  }

  getStudent(stdId:number){
    return this.httpClient.get<Student>(this.baseUrl+"/api/Student/"+stdId);

  }

  updateStudent(stdId:any, student:Student){
    return this.httpClient.put<Student>(this.baseUrl+"/api/Student/"+stdId, student)
  }

  deleteStudent(stdId:any){
    return this.httpClient.delete(this.baseUrl+"/api/Student/"+stdId)
  }
}
