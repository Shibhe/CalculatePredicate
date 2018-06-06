import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "https://uncreditable-window.000webhostapp.com/financial_planning";
  isLoggedIn = true;
  constructor(private http: HttpClient) { }

  userLogin(stuffNo, password): Observable<any>{
    return this.http.get(`${this.BASE_URL}/login.php?Stuff_No=${stuffNo}&password=${password}`)
  }

  get isAuthenticated(){
    return this.isLoggedIn;
  }
  
  set isAuthenticated(status){
    this.isLoggedIn = status;
  }
}
