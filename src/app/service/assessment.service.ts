import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';
// import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {


  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";

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

  /*getGroups(){
    return this.httpClient.get<any>(`${this.BASE_URL}/getGroup.php`)
  }*/

  submitResults(results, assessment_Id, stud_No, group_Id){
    return this.httpClient.get<any>(`${this.BASE_URL}/submitResults.php?student_Id=${stud_No}&results=${results}&assessment_Id=${assessment_Id}&group_Id=${group_Id}`);
  }
}
