import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stuff } from '../../model/stuff.model';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  BASE_URL = "https://uncreditable-window.000webhostapp.com/financial_planning";
  constructor(private http: HttpClient) { }

  addLecturer(stuff){
    return this.http.get<any>(`${this.BASE_URL}/addUser.php?Initials=${stuff.Initials}&LastName=${stuff.LastName}&Stuff_No=${stuff.Stuff_No}&Email=${stuff.Email}&Password=${stuff.Password}`);
  }

  addStudent(stuff: Student){
    return this.http.get("");
  }
}
