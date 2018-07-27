import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";
  isLoggedIn = true;
  constructor(private http: HttpClient) { }

  userLogin(email, password): Observable<any>{
    return this.http.get(`${this.BASE_URL}/login.php?staff_Email=${email}&staff_Password=${password}&staff_Number=${email}`)
  }

  updatePassword(password, id){
    return this.http.get<any>(`${this.BASE_URL}/updatePassword.php?staff_Password=${password}&staff_Id=${id}`)
  }

  get isAuthenticated(){
    return this.isLoggedIn;
  }
  
  set isAuthenticated(status){
    this.isLoggedIn = status;
  }
}
