import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }


  getAllAssessment(){
    return this.httpClient.get<any>("");
  }
}
