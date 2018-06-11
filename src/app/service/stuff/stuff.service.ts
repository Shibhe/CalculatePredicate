import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stuff } from '../../model/stuff.model';
import { Student } from '../../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";

  constructor(private http: HttpClient) { }

  addLecturer(stuff: Stuff){
    return this.http.get<any>(`${this.BASE_URL}/addUser.php?staff_FName=${stuff.Initials}&staff_LName=${stuff.LastName}&staff_Number=${stuff.Stuff_No}&staff_PNumber=${stuff.phoneNumber}&staff_Email=${stuff.Email}&staff_Password=${stuff.Password}`);
  }

  
}
