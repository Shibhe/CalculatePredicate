import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  BASE_URL = "https://uncreditable-window.000webhostapp.com/Grading_Scripts";

  constructor(private http: HttpClient) { }

  getReport(id){
    return this.http.get<any[]>(`${this.BASE_URL}/generateReport.php?staff_Id=${id}`);
  }
}
