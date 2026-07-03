import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentserviceService {
  private url = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/getAllStudent');
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url + '/saveStudent', student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.url + '/update', student);
  }

  deleteStudent(id: number): Observable<string> {
    return this.http.delete(this.url + '/deleteStudent/' + id, {
      responseType: 'text',
    });
  }
}
