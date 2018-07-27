import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/student/student.service';
import { Student } from '../../../model/student.model';
import { AssessmentService } from '../../../service/assessment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-lecturer-page',
  templateUrl: './main-lecturer-page.component.html',
  styleUrls: ['./main-lecturer-page.component.css']
})
export class MainLecturerPageComponent implements OnInit {

  groups: any;
  rep: number;
  currentUser: any = null;
  student: Student = new Student();

  constructor(private router: Router, private _StudentService: StudentService, 
              private _AssessmentService: AssessmentService) { }

  ngOnInit() {

    this.student.studGroup = "0";
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    this.rep = 0;
    this._AssessmentService.getGroups()
                            .subscribe((data) => {
                              this.groups = data;
                            },
                            // Handle errors
                            (err: HttpErrorResponse | Error) => {
                             // this.spinnerService.hide();
                            
                            if (err instanceof HttpErrorResponse) {
                                if (err.status == 200 && err.ok == false){
                                   alert("Something went wrong. Please choose another option");
                                } else if (err.status == 401){
                                  alert("Server-side error occured. Please check your token");
                                } else if (err.status == 400){
                                  alert(err.message);
                                } else if (err.status == 404){
                                 alert(err.message);
                               }
                                } else {
                                  console.log("Server-side error occured.");
                                }
                            });
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  AddStudentInfo(){

    this.student.stuffNo = this.currentUser.staff_Id;
    this.student.student_Status = "Pending";

    this._StudentService.addStudent(this.student)
                     .subscribe((data) => {
                      if (data.success == 1){
                        alert(data.message);
                        this.student = new Student();
                      } else if (data.success == 0) {
                        alert(data.message);
                      } else if (data.success == 2) {
                        alert(data.message);
                      }
                     },
                     // Handle errors
                     (err: HttpErrorResponse | Error) => {
                      // this.spinnerService.hide();
                     
                     if (err instanceof HttpErrorResponse) {
                         if (err.status == 200 && err.ok == false){
                            alert("Something went wrong. Please choose another option");
                         } else if (err.status == 401){
                           alert("Server-side error occured. Please check your token");
                         } else if (err.status == 400){
                           alert(err.message);
                         } else if (err.status == 404){
                          alert(err.message);
                        }
                         } else {
                           console.log("Server-side error occured.");
                         }
                     });
             
  }

  onChangeObj(e){
    this.student.studGroup = e;
  }

  generateReport(){
    this.router.navigate(['user/lecturer-dashboard/report']);
  }
}
