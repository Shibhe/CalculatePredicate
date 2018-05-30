import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }


  getAllAssessment(){
    return this.httpClient.get<any>("https://uncreditable-window.000webhostapp.com/financial_planning/getAllAssessment.php")
  }

  submitResults(results){

  }
}
