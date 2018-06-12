import { Injectable } from '@angular/core';
import { Student } from '../../model/student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";

  constructor(private http: HttpClient) { }

  addStudent(stuff: Student){
    return this.http.get<any>(`${this.BASE_URL}/addStudent.php?student_FName=${stuff.studInitials}&student_LName=${stuff.studSurname}&student_Number=${stuff.studNo}&student_Email=${stuff.student_Email}&group_Id=${stuff.studGroup}&student_ProjectName=${stuff.projectName}&staff_Id=${stuff.stuffNo}&student_Status=${stuff.student_Status}`);
  }

  getStudent(id){
    return this.http.get<any>(`${this.BASE_URL}/getStudent.php?group_Id=${id}`);
  }
}
