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

  constructor(private _AssessmentService: AssessmentService,
              private studentService: StudentService) {}
  

  ngOnInit() {

  
    this.task = 0;
    // assessment 1
    this.a1.s1 = "0";
    this.a1.s2 = "0";
    this.a1.s3 = "0";
    this.a1.s4 = "0";
    this.a1.s5 = "0";
    this.a1.s6 = "0";
    this.a1.s7 = "0";
    this.a1.s8 = "0";
    this.a1.s9 = "0";
    // Assessment 2
    this.a2.s1 = "0";
    this.a2.s2 = "0";
    this.a2.s3 = "0";
    this.a2.s4 = "0";
    this.a2.s5 = "0";
    this.a2.s6 = "0";
    this.a2.s7 = "0";
    

    //Assessment 3
    this.a3.s1 = "0";
    this.a3.s2 = "0";
    this.a3.s3 = "0";
    this.a3.s4 = "0";
    this.a3.s5 = "0";
    this.a3.s6 = "0";
    this.a3.s7 = "0";
    this.a3.s8 = "0";
    this.a3.s9 = "0";
    this.a3.s10 = "0";
    this.a3.s11 = "0";
    this.a3.s12 = "0";
    this.a3.s13 = "0";
    this.a3.s14 = "0";
    this.a3.s15 = "0";
    this.a3.s16 = "0";
    this.a3.s17 = "0";
    //Assessment 4
    this.a4.s1 = "0";
    this.a4.s2 = "0";
    this.a4.s3 = "0";
    this.a4.s4 = "0";
    this.a4.s5 = "0";
    this.a4.s6 = "0";
    this.a4.s7 = "0";
    this.a4.s8 = "0";
    this.a4.s9 = "0";
    this.a4.s10 = "0";
    this.a4.s11 = "0";
    this.a4.s12 = "0";
    this.a4.s13 = "0";
    this.a4.s14 = "0";
    this.a4.s15 = "0";
    this.a4.s16 = "0";
    this.a4.s17 = "0";
    
    // Assessment 5
    this.a5.s1 = "0";
    this.a5.s2 = "0";
    this.a5.s3 = "0";
    this.a5.s4 = "0";
    this.a5.s5 = "0";
    this.a5.s6 = "0";
    this.a5.s7 = "0";
    this.a5.s8 = "0";
    this.a5.s9 = "0";
    this.a5.s10 = "0";
    this.a5.s11 = "0";
    this.a5.s12 = "0";
    this.a5.s13 = "0";
    this.a5.s14 = "0";
    this.a5.s15 = "0";
    this.student.studNo = "0";
   

    this.optradio = '1';
    this.task = "0";
    
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
                              console.log(this.groups);
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
                            console.log(this.groups);
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
   // this.student.studNo = this.info[0].student_Id;
    this.student.projectName = this.info[0].student_ProjectName;
    this.student.studInitials = this.info[0].student_FName;
    this.student.studSurname = this.info[0].student_LName;
    //this.student.studGroup = this.info[0].group_Name;
  }

  selectedGroup(e){
    console.log(e);
    this.students = [];
    let id;
    
    this.studentService.getStudent(e, id)
                       .subscribe((data) => {
                        if (data.success !== 0){
                          this.students = data;
                          console.log(this.students);
                        } else {
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

  onChange(val) {
    this.task = val;
    
    this.total = 0;
    this.left = 0;
   // this.spinnerService.show();
    console.log("Info ",this.task)
   if (this.task == "2"){
     this._AssessmentService.getAssessment2()
                            .subscribe((data) => {
                            //  this.spinnerService.hide();
                              this.assessment = data;
                              console.log(this.assessment);
                            })
   } else if (this.task == "6"){
    this._AssessmentService.getAllAssessment()
    .subscribe((data) => {
      this.assessment = data;
      console.log(this.assessment);
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
   } else {
    this._AssessmentService.getAssessment(this.task)
    .subscribe((data) => {
      this.assessment = data;
      console.log(this.assessment);
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
  }

  
  
 



  submitResult(){
  
    if (this.optradio == '2'){
      for (let i = 0; i < this.students.length; i++){
        this._AssessmentService.submitResults(this.total, this.assessment[0].assessment_Id, this.students[i].student_Id, this.student.studGroup)
                                .subscribe((data) => {

                                  if (data.success == 1){
                                    alert(data.message);
                                    this.students = [];
                                  } else {
                                    alert(data.message);
                                  }
                                  console.log(data);

                                  this.student = new Student();
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
    } else if (this.optradio == '1'){
      this._AssessmentService.submitIndResults(this.total, this.assessment[0].assessment_Id, this.student.stud_ID)
                            .subscribe((data) => {

                              if (data.success == 1){
                                alert(data.message);
                              } else {
                                alert(data.message);
                              }
                              console.log(data);

                              this.student = new Student();
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
    }
}

