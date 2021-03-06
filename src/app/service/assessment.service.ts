import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../model/student.model';
// import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {


  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";
  myHeaders: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }


  getAllAssessment(){
    return this.httpClient.get<any>(`${this.BASE_URL}/getAllAssessment.php`)
  }

  getAssessment2(){
    return this.httpClient.get<any>(`${this.BASE_URL}/getAssment2.php`)
  }
  
  getAssessment(id){
    return this.httpClient.get<any>(`${this.BASE_URL}/getAssessment.php?assessment_Id=${id}`)
  }

  getAsses(){
    return this.httpClient.get<any>(`${this.BASE_URL}/getAllAssess.php`)
  }
  
  getGroups(){
    return this.httpClient.get<any>(`${this.BASE_URL}/getAllGroups.php`)
  }

  getStudentNoGroup(){
    return this.httpClient.get<any>(`${this.BASE_URL}/studentNoGroup.php`)
  }
  
 /* submitResults(results){
    this.myHeaders.append("Content-Type", "application/json");
    this.myHeaders.append("Origin", "http://localhost:4200");

    return this.httpClient.post<any>(`${this.BASE_URL}/submitResults.php`, results, { headers: this.myHeaders});
  }

  submitIndResults(results){
    return this.httpClient.post<any>(`${this.BASE_URL}/submitIndStudent.php`, results);
  }*/
  submitResults(results, assessment_Id, stud_No, group_Id,comment){
    return this.httpClient.get<any>(`${this.BASE_URL}/submitResults.php?student_Id=${stud_No}&results=${results}&assessment_Id=${assessment_Id}&group_Id=${group_Id}&comment=${comment}`);
  }

  submitIndResults(results, assessment_Id, stud_No,comment){
    return this.httpClient.get<any>(`${this.BASE_URL}/submitIndStudent.php?student_Id=${stud_No}&results=${results}&assessment_Id=${assessment_Id}&comment=${comment}`);
  }
}
