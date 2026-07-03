import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { StudentserviceService } from './studentservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Demo-Practice';

  student: Student = new Student();

  students: Student[] = [];

  isEdit: boolean = false;

  constructor(private studentService: StudentserviceService) {}

  ngOnInit(): void {
    this.getAllDataFromDb();
  }

  getAllDataFromDb(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  saveStudent(): void {
    this.studentService.saveStudent(this.student).subscribe({
      next: () => {
        alert('Student Saved Successfully');

        this.student = new Student();

        this.isEdit = false;

        this.getAllDataFromDb();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  editStudent(student: Student): void {
    this.student = { ...student };

    this.isEdit = true;
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student).subscribe({
      next: () => {
        alert('Student Updated Successfully');

        this.student = new Student();

        this.isEdit = false;

        this.getAllDataFromDb();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  cancelEdit(): void {
    this.student = new Student();

    this.isEdit = false;
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: (message) => {
          alert(message);

          this.getAllDataFromDb();

          this.student = new Student();

          this.isEdit = false;
        },

        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
