import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../model/student.model';
import { Assessment1 } from '../../../../model/assessment_1';
import { Assessment2 } from '../../../../model/assessment_2';
import { Assessment3 } from '../../../../model/assessment_3';
import { Assessment4 } from '../../../../model/assessment_4';
import { Assessment5 } from '../../../../model/assessment_5';
import { AssessmentService } from '../../../../service/assessment.service';
import { StudentService } from '../../../../service/student/student.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  average11: number = 0;
 
  assessSelected: any[] = [];
  student: Student = new Student();
  left: number = 0;
  
  groups: any[] = [];
  group: any[] = [];
  info: any[] = [];

  a1: Assessment1 = new Assessment1();
  a2: Assessment2 = new Assessment2();
  a3: Assessment3 = new Assessment3();
  a4: Assessment4 = new Assessment4();
  a5: Assessment5 = new Assessment5();
  
  optionSelected;
  average: number = 0;
  average2: number = 0;
  average3: number = 0;
  average4: number = 0;
  total: number = 0;
  status: string = null;
  tasks: any[] = [];
  assessment: any[] = [];
  task: any = null;
  optradio: any = null;
  students: any[] = [];
  currentUser: any = null;

  constructor(private _AssessmentService: AssessmentService,
              private studentService: StudentService) {}
  

  ngOnInit() {

    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));  
    this.task = "0";
    this.student.studNo = "0";
    this.optradio = '1';
    this.task = "0";
    this.student.studGroup = "0";
    
    this._AssessmentService.getAsses()
                           .subscribe((data) => {
                             this.tasks = data;
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

   this._AssessmentService.getGroups()
                            .subscribe((data) => {
                              this.group = data;
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

    this._AssessmentService.getStudentNoGroup()
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

  onChangeObj(val){
    this.info[0] = val;
    this.student.stud_ID = this.info[0].student_Id;
    this.student.projectName = this.info[0].student_ProjectName;
    this.student.studInitials = this.info[0].student_FName;
    this.student.studSurname = this.info[0].student_LName;
  }

  selectedGroup(e){
    this.students = [];
    let id = this.currentUser.staff_Id;
    
    this.studentService.getStudent(e, id)
                       .subscribe((data) => {
                        if (data.success !== 0){
                          this.students = data;
                        } else {
                          alert(data.message);
                        }
                       },
                       // Handle errors
                       (err: HttpErrorResponse | Error) => {
                       
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

  onChange(val) {
    this.task = val;
    
    this.total = 0;
    this.left = 0;
   if (this.task == "2"){
     this._AssessmentService.getAssessment2()
                            .subscribe((data) => {
                              this.assessment = data;
                            })
   } else if (this.task == "6"){
    this._AssessmentService.getAllAssessment()
    .subscribe((data) => {
      this.assessment = data;
    },
    // Handle errors
    (err: HttpErrorResponse | Error) => {
    
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
   } else {
    this._AssessmentService.getAssessment(this.task)
    .subscribe((data) => {
      this.assessment = data;
    },
    // Handle errors
    (err: HttpErrorResponse | Error) => {
    
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
  }
}

